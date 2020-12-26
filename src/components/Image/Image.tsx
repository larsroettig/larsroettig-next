/*  eslint-disable global-require */
import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

interface iImage {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  heigth?: string;
  responsive?: boolean;
}

const Image: React.FC<iImage> = ({
  src,
  alt,
  className = ``,
  width = `1000`,
  heigth = `1000`,
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
      <LazyLoadComponent>
        <picture className={className}>
          <source type="image/webp" data-srcset={webPSrc} />
          <source type="image/png" data-srcset={imgSrc} />
          <img alt={alt} src={imgSrc} width={width} height={heigth} />
        </picture>
      </LazyLoadComponent>
    );
  }

  // eslint-disable-next-line import/no-dynamic-require
  const image = require(`../../../images/${src}?resize&sizes[]=400&sizes[]=600&sizes[]=1000`);
  // eslint-disable-next-line import/no-dynamic-require
  const imageWebP = require(`../../../images/${src}?resize&sizes[]=400&sizes[]=600&sizes[]=1000&format=webp`);

  return (
    <LazyLoadComponent>
      <picture className={className}>
        <source type="image/webp" data-srcset={imageWebP.srcSet} />
        <source type="image/png" data-srcset={image.srcSet} />
        <img alt={alt} height={width} src={image.src} width={heigth} />
      </picture>
    </LazyLoadComponent>
  );
};

export default Image;
