import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';

const readingTime = require(`reading-time`);
const remarkSlug = require(`remark-slug`);
const remarkHeadings = require(`remark-autolink-headings`);

export const CONTENT_PATH = `content`;
export const POSTS_PATH = path.join(CONTENT_PATH, `posts`);

export const getPostSlugs = (): string[] => {
  const postPaths = fs.readdirSync(path.resolve(POSTS_PATH));
  return postPaths.map((postPath) => postPath.replace(`.mdx`, ``));
};

export function getAllPostData(): PostHeader[] {
  const postPaths = fs.readdirSync(path.resolve(POSTS_PATH));
  const postData = postPaths.map((slug) => {
    const fullPath = path.resolve(POSTS_PATH, `${slug}`);
    const fileContents = fs.readFileSync(fullPath, `utf8`);
    const { data } = matter(fileContents);
    data.slug = slug.replace(`.mdx`, ``);
    return data;
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
export interface PostPath {
  slug: string;
}

export interface PostHeader {
  title?: string;
  published?: boolean;
  date?: string;
  modifiedAt?: string;
  description?: string;
  author?: string;
  hero?: string;
  slug?: string;
}

export interface PostRss extends PostPath {
  title?: string;
  date?: string;
  modifiedAt?: string;
  description?: string;
}

export interface Post extends PostPath {
  mdxContent: string;
  readingTime: string;
  frontMatter: PostHeader;
}
