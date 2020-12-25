/*  eslint-disable global-require */
import React from 'react';
import 'lazysizes';

interface iImage {
  src: string;
  alt: string;
  className?: string;
  responsive: boolean;
}

const Image: React.FC<iImage> = ({
  src,
  alt,
  className = ``,
  responsive = false,
}) => {
  if (responsive === false) {
    // eslint-disable-next-line import/no-dynamic-require
    const imgSrc = require(`../../../images/${src}`);
    // eslint-disable-next-line import/no-dynamic-require
    const webPSrc = require(`../../../images/${src}?webp`);
    // eslint-disable-next-line import/no-dynamic-require
    const lqipSrc = require(`../../../images/${src}?lqip`);

    return (
      <picture className={className}>
        <source type="image/webp" data-srcset={webPSrc} />
        <source type="image/png" data-srcset={imgSrc} />
        <img className={`lazyload blur ${className}`} alt={alt} src={lqipSrc} />
      </picture>
    );
  }

  // eslint-disable-next-line import/no-dynamic-require
  const imgSrc = require(`../../../images/${src}?resize&sizes[]=400&sizes[]=600&sizes[]=1000`);
  // eslint-disable-next-line import/no-dynamic-require
  const webPSrc = require(`../../../images/${src}?webp&?resize&sizes[]=400&sizes[]=600&sizes[]=1000`);
  // eslint-disable-next-line import/no-dynamic-require
  const lqipSrc = require(`../../../images/${src}?lqip`);

  return (
    <picture>
      <source srcSet={webPSrc.srcSet} type="image/webp" />
      <source srcSet={imgSrc.srcSet} type="image/png" />
      <img alt={alt} src={lqipSrc} sizes="(min-width: 1024px) 1024px, 100vw" />
    </picture>
  );
};

export default Image;
