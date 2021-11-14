import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import { compareDesc } from 'date-fns';
import { MdxRemote } from 'next-mdx-remote/types';
import { getPlaiceholder } from 'plaiceholder';

const readingTime = require(`reading-time`);
const remarkSlug = require(`remark-slug`);
const remarkHeadings = require(`remark-autolink-headings`);

export const PAGES_PATH = path.join(`content`, `pages`);
export const POSTS_PATH = path.join(`content`, `posts`);

export const getPostSlugs = (): string[] => {
  const postPaths = fs.readdirSync(path.resolve(POSTS_PATH));
  return postPaths.map((postPath) => postPath.replace(`.mdx`, ``));
};

export async function getAllPostData(): Promise<PostHeader[]> {
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
  
  return postData;
}

export const getPostBySlug = async (
  slug: string,
  components = {},
): Promise<Post> => {
  const fullPath = path.resolve(POSTS_PATH, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, `utf8`);
  const { content, data } = matter(fileContents);

  const mdxContent = await renderToString(content, {
    scope: data,
    components,
    mdxOptions: {
      remarkPlugins: [remarkSlug, remarkHeadings],
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
      remarkPlugins: [remarkSlug, remarkHeadings],
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
