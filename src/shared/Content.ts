import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import { compareDesc } from 'date-fns';
import { MdxRemote } from 'next-mdx-remote/types';
import { getPlaiceholder } from 'plaiceholder';
import remarkSlug from 'remark-slug';

import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const readingTime = require(`reading-time`);

export const PAGES_PATH = path.join(`content`, `pages`);
export const POSTS_PATH = path.join(`content`, `posts`);

export const getPostSlugs = (): string[] => {
  const postPaths = fs.readdirSync(path.resolve(POSTS_PATH));
  return postPaths.map((postPath) => postPath.replace(`.mdx`, ``));
};

type GenerateRssReturn = {
  frontmatter: Frontmatter[];
};

export async function getAllPostData(): Promise<GenerateRssReturn> {
  const postPaths = fs.readdirSync(path.resolve(POSTS_PATH));
  const postData = await Promise.all(
    postPaths.map(async (slug) => {
      const fullPath = path.resolve(POSTS_PATH, `${slug}`);
      const fileContents = fs.readFileSync(fullPath, `utf8`);
      const { data } = matter(fileContents);
      data.slug = slug.replace(`.mdx`, ``);

      const { base64 } = await getPlaiceholder(`/images/${data.hero}`);
      data.placeHolder = base64;
      return data;
    }),
  );

  postData.sort((first, second) => {
    const firstDate = first.modifiedAt || first.date;
    const secondDate = second.modifiedAt || second.date;
    return compareDesc(new Date(firstDate), new Date(secondDate));
  });

  return { frontmatter: postData };
}

export const getPostBySlug = async (slug: string, components = {}) => {
  const fullPath = path.resolve(POSTS_PATH, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, `utf8`);
  const { content, data } = matter(fileContents);

  const mdxContent = await renderToString(content, {
    scope: data,
    components,
    mdxOptions: {
      remarkPlugins: [remarkSlug],
      rehypePlugins: [
        [
          rehypeAutolinkHeadings,
          {
            content: {
              type: `element`,
              tagName: `span`,
              properties: {
                className: [`absolute`],
                style: {
                  marginLeft: `-1.7rem`,
                  marginTop: `0.5rem`,
                  color: `#2b6cb0`,
                },
              },
              children: [
                {
                  type: `element`,
                  tagName: `svg`,
                  properties: {
                    xmlns: `http://www.w3.org/2000/svg`,
                    viewbox: `0 0 24 24`,
                    className: `h-6 w-6`,
                    stroke: `currentColor`,
                    fill: `none`,
                    height: `24px`,
                    with: `24px`,
                  },
                  children: [
                    {
                      type: `element`,
                      tagName: `path`,
                      properties: {
                        'stroke-linecap': `round`,
                        'stroke-linejoin': `round`,
                        'stroke-width': `2`,
                        d: `M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1`,
                      },
                    },
                  ],
                },
              ],
            },
          },
        ],
      ],
      filepath: path.join(POSTS_PATH, slug),
    },
  });

  const stats = readingTime(mdxContent.renderedOutput);
  return { slug, mdxContent, frontMatter: data, readingTime: stats.text };
};

export const getPageBySlug = async (
  slug: string,
  components = {},
): Promise<Page> => {
  const fullPath = path.resolve(PAGES_PATH, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, `utf8`);
  const { content, data } = matter(fileContents);

  const mdxContent = await renderToString(content, {
    scope: data,
    components,
    mdxOptions: {
      remarkPlugins: [remarkSlug],
      filepath: path.join(POSTS_PATH, slug),
    },
  });

  return { slug, mdxContent, frontMatter: data };
};

export interface Path {
  slug: string;
}

export interface PostHeader {
  title: string;
  published?: boolean;
  date: string;
  modifiedAt?: string;
  description: string;
  author?: string;
  hero?: string;
  slug?: string;
  placeHolder?: string;
}

export interface PostRss extends Path {
  title?: string;
  date?: string;
  modifiedAt?: string;
  description?: string;
}

export interface Post extends Path {
  mdxContent: MdxRemote.Source;
  readingTime: string;
  frontMatter: PostHeader;
}

export interface PageHeader {
  title?: string;
  description?: string;
}

export interface Page extends Path {
  mdxContent: MdxRemote.Source;
  frontMatter: PageHeader;
}
