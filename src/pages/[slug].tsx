import React from 'react';
import { NextPage } from 'next';
import hydrate from 'next-mdx-remote/hydrate';

import { getAllPostSlugs, renderMdxForPostSlug } from '../content';

interface Props {
  content: any;
  frontMatter: {
    title: string;
    subtitle: string;
    datePublished: string;
    imageAlt?: string;
    imageCreditText?: string;
    imageCreditLink?: string;
    image?: string;
    seoImage?: string;
  };
}

const PostPage: NextPage<Props> = ({ content, frontMatter }) => {
  const mdxContent = hydrate(content, { components: {} });
  return (
    <div className="container mx-auto px-2 sm:px-6 lg:px-8">
      <article className="prose lg:prose-xl">{mdxContent}</article>;
    </div>
  );
};

export const getStaticPaths = async () => {
  const postSlugs = getAllPostSlugs();

  return {
    paths: postSlugs.map((postSlug) => ({ params: { slug: postSlug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const { mdxContent, frontMatter } = await renderMdxForPostSlug(slug);

  return {
    props: {
      content: mdxContent,
      frontMatter,
    },
  };
};

export default PostPage;
