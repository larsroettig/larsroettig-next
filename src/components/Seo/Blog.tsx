import React from 'react';
import { ArticleJsonLd } from 'next-seo';
import Basis from './Basis';

interface BlogProps {
  title: string;
  description: string;
  publishedAt: string;
  url: string;
  image?: string;
}

const Blog: React.FC<BlogProps> = ({
  title,
  description,
  publishedAt,
  url,
  image,
}) => {
  const date = new Date(publishedAt).toISOString();

  const images = [
    {
      url: image || `https://larsroettig.dev/banner.jpg`,
      alt: title,
      width: 1280,
      height: 720,
    },
  ];

  const articleImages = [image] || [`https://larsroettig.dev/banner.jpg`];

  return (
    <>
      <Basis
        title={title}
        description={description}
        url={url}
        openGraph={{
          type: `article`,
          article: {
            publishedTime: date,
          },
          url,
          title,
          description,
          images,
        }}
      />
      <ArticleJsonLd
        authorName="Lars Roettig"
        dateModified={date}
        datePublished={date}
        description={description}
        images={articleImages}
        publisherLogo="https://larsroettig.dev/icons/android-chrome-192x192.png"
        publisherName="Lars Roettig"
        title={title}
        url={url}
      />
    </>
  );
};

export default Blog;
