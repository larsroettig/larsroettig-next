import React from 'react';
import { NextSeo } from 'next-seo';
import { OpenGraph } from 'next-seo/lib/types';

interface BlogProps {
  title: string;
  description: string;
  openGraph?: OpenGraph;
  url?: string;
}

export const defaultUrl = `https://larsroettig.dev/`;

const Basis: React.FC<BlogProps> = ({ title, description, url, openGraph }) => {
  const defaultOpenGraphData = {
    type: `website`,
    locale: `en`,
    url: defaultUrl,
    title,
    description,
    images: [
      {
        url: `https://larsroettig.dev/banner.jpg`,
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  };

  return (
    <>
      <NextSeo
        title={`${title} – Lars Roettig`}
        description={description}
        canonical={url || defaultUrl}
        openGraph={openGraph || defaultOpenGraphData}
        twitter={{
          handle: `@LarsRoettig`,
          site: `@LarsRoettig`,
          cardType: `summary_large_image`,
        }}
      />
    </>
  );
};

export default Basis;
