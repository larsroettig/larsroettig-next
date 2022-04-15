// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { NextPage } from 'next';

import React from 'react';
import Obfuscate from 'react-obfuscate';

import { BasisSeo, defaultUrl } from '../components/Seo';

import { Image } from '../components/Mdx';
import Employer from '../components/About/employer';

import { useMDXComponent } from 'next-contentlayer/hooks';
import { Pages } from 'contentlayer/generated';

type PageProps = {
  slug: string;
  content: Pages;
};

const Page: NextPage<PageProps> = ({ slug, content }) => {
  const Component = useMDXComponent(content.body.code);

  return (
    <>
      <BasisSeo
        title={content.title}
        description={content.description}
        url={`${defaultUrl}${slug}`}
      />

      <div className="container mx-auto px-2">
        <div className="w-full">
          <article className="prose lg:prose-xl max-w-full my-10">
            <Component
              components={
                {
                  Obfuscate,
                  Image,
                  Employer,
                } as any
              }
            />
          </article>
        </div>
      </div>
    </>
  );
};

export default Page;
