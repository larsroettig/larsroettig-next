import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';

import { Post } from './Post';

const remarkSlug = require(`remark-slug`);
const images = require(`remark-images`);

export const CONTENT_PATH = `content`;
export const POSTS_PATH = path.join(CONTENT_PATH, `posts`);

export const getPostSlugs = (): string[] => {
  const postPaths = fs.readdirSync(path.resolve(POSTS_PATH));
  return postPaths.map((postPath) => postPath.replace(`.mdx`, ``));
};

export const getPostBySlug = async (slug: string): Promise<Post> => {
  const fullPath = path.resolve(POSTS_PATH, `${slug}/index.mdx`);
  const fileContents = fs.readFileSync(fullPath, `utf8`);
  const { content, data } = matter(fileContents);

  const mdxContent = await renderToString(content, {
    scope: data,
    mdxOptions: {
      remarkPlugins: [remarkSlug, images],
      filepath: path.join(POSTS_PATH, slug),
    },
  });

  return { slug, mdxContent, frontMatter: data };
};
