import { bundleMDX } from 'mdx-bundler';
import path from 'path';
import fs from 'fs';
import calculateReadingTime from 'reading-time';
import { compareDesc } from 'date-fns';

const matter = require(`gray-matter`);

import * as shiki from 'shiki';
import withShiki from '@stefanprobst/remark-shiki';

export const PAGES_PATH = path.join(`content`, `pages`);
export const POSTS_PATH = path.join(`content`, `posts`);

export const getSlugsByDir = (contentDir: string): string[] => {
  const postPaths = fs.readdirSync(path.resolve(contentDir));
  return postPaths.map((postPath) => postPath.replace(`.mdx`, ``));
};

export const getFileContent = (filename: string) => {
  return fs.readFileSync(path.join(POSTS_PATH, filename), `utf8`);
};

export const getAllPosts = (sortByDate: true): MdxPage[] => {
  const postData = fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getFileContent(fileName);
      const slug = fileName.replace(/\.mdx?$/, ``);
      const { data } = matter(source);

      return {
        frontmatter: data,
        slug: slug,
      };
    });

  if (sortByDate) {
    postData.sort((first, second) => {
      const firstFrontmatter = first.frontmatter;
      const secondFrontmatter = second.frontmatter;

      const firstDate = firstFrontmatter.modifiedAt || firstFrontmatter.date;
      const secondDate = secondFrontmatter.modifiedAt || secondFrontmatter.date;

      return compareDesc(new Date(firstDate), new Date(secondDate));
    });
  }

  return postData;
};

async function getContentBySlug<
  FrontmatterType extends Record<string, unknown>,
>(slug: string, basePath = POSTS_PATH) {
  const fullPath = path.resolve(basePath, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, `utf8`);
  const { content, data } = matter(fileContents);

  const { default: remarkAutolinkHeadings } = await import(
    'remark-autolink-headings'
  );
  const { default: remarkSlug } = await import('remark-slug');

  const { default: gfm } = await import('remark-gfm');
  const highlighter = await shiki.getHighlighter({ theme: 'poimandres' });
  const remarkPlugins: any = [
    remarkSlug,
    gfm,
    [withShiki, { highlighter }],
    [remarkAutolinkHeadings, { behavior: 'wrap' }],
  ];
  const rehypePlugins: [] = [];

  try {
    const { frontmatter, code } = await bundleMDX(content, {
      xdmOptions(options) {
        options.remarkPlugins = [
          ...(options.remarkPlugins ?? []),
          ...remarkPlugins,
        ];
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          ...rehypePlugins,
        ];
        return options;
      },
    });
    const readTime = calculateReadingTime(code);

    return {
      code,
      readTime,
      frontmatter: frontmatter as FrontmatterType,
    };
  } catch (error: unknown) {
    console.error(`Compilation error for slug: `, slug);
    throw error;
  }
}
