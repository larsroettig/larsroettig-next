import { NextPage } from 'next';
import hydrate from 'next-mdx-remote/hydrate';
import { NextSeo } from 'next-seo';
import React from 'react';

const Page: NextPage<any> = ({ content, frontMatter }) => {
  const { title, description } = frontMatter;
  const mdxContent = hydrate(content);
  return (
    <>
      <NextSeo title={title} description={description} />
      <div className="container mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="w-full">
          <article className="prose lg:prose-xl max-w-full my-10">
            {mdxContent}
          </article>
        </div>
      </div>
    </>
  );
};

export default Page;
