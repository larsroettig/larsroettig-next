/*  eslint-disable global-require */
import React from 'react';
import 'lazysizes';

interface iImage {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<iImage> = ({ src, alt, className = `` }) => {
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
};

export default Image;
