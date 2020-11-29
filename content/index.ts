import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import renderToString from 'next-mdx-remote/render-to-string';
import Post from '@/shared/Post';

export const CONTENT_PATH = `src/content`;
export const POSTS_PATH = path.join(CONTENT_PATH, `posts`);

const remarkSlug = require(`remark-slug`);

export function getAllPostSlugs(): string[] {
  const postPaths = fs.readdirSync(path.resolve(POSTS_PATH));
  return postPaths.map((postPath) => postPath.replace(`.mdx`, ``));
}

/**
 * Get all posts + frontmatter - for blog listing page
 */
export function getAllPostData(): Post[] {
  const postPaths = fs.readdirSync(path.resolve(POSTS_PATH));

  const postData = postPaths.map(
    (postPath): Post => {
      const fileContents = fs
        .readFileSync(path.resolve(POSTS_PATH, postPath))
        .toString();

      const { data: frontMatter, excerpt } = matter(fileContents);

      frontMatter.slug = postPath.replace(`.mdx`, ``);

      return {
        slug,
        excerpt,
        frontMatter,
      };
    },
  );

  return postData;
}

/*
 * Private helper for rendering MDX content from a given `filePath`
 */
async function renderMdxForFile(filePath: string): Promise<Post> {
  const fileContents = fs.readFileSync(filePath).toString();
  const { content, data } = matter(fileContents);

  const mdxContent = await renderToString(content, {
    scope: data,
    mdxOptions: {
      remarkPlugins: [remarkSlug],
    },
  });

  return { mdxContent, frontMatter: data };
}

/**
 * Process frontmatter + mdx content for the given post by slug
 */
export function renderMdxForPostSlug(slug: string): Promise<Post> {
  const postPath = path.resolve(POSTS_PATH, `${slug}/index.mdx`);
  return renderMdxForFile(postPath);
}
