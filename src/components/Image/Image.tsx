/*  eslint-disable global-require */
import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

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
  const image = require(`../../../images/${src}?resize&sizes[]=400&sizes[]=600&sizes[]=1000`);
  // eslint-disable-next-line import/no-dynamic-require
  const imageWebP = require(`../../../images/${src}?resize&sizes[]=400&sizes[]=600&sizes[]=1000&format=webp`);

  return (
    <LazyLoadComponent>
      <picture className={className}>
        <source type="image/webp" data-srcset={image.srcSet} />
        <source type="image/jpg" data-srcset={imageWebP.srcSet} />
        <img alt={alt} height={1000} src={image.src} width={1000} />
      </picture>
    </LazyLoadComponent>
  );
};

export default Image;
