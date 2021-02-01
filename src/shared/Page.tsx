import { NextPage } from 'next';
import hydrate from 'next-mdx-remote/hydrate';

import React from 'react';
import Mailto from 'react-protected-mailto';

import { BasisSeo, defaultUrl } from '@/components/Seo';

import { Image } from '@/components/Mdx';
import Employer from '@/components/About/employer';
import { MdxRemote } from 'next-mdx-remote/types';
import { PageHeader } from './Content';

const components = {
  components: {
    Mailto,
    Image,
    Employer,
  },
};

type PageProps = {
  slug: string;
  content: MdxRemote.Source;
  frontMatter: PageHeader;
};

const Page: NextPage<PageProps> = ({ slug, content, frontMatter }) => {
  const { title, description } = frontMatter;
  const mdxContent = hydrate(content, components);
  return (
    <>
      <BasisSeo
        title={title}
        description={description}
        url={`${defaultUrl}${slug}`}
      />

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
