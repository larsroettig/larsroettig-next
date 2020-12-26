/*  eslint-disable global-require */
import React from 'react';
import 'lazysizes';

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
  width = `1024`,
  heigth = `576`,
  responsive = false,
}) => {
  if (responsive === false) {
    // eslint-disable-next-line import/no-dynamic-require
    const imgSrc = require(`../../../images/${src}`);
    // eslint-disable-next-line import/no-dynamic-require
    const webPSrc = require(`../../../images/${src}?format=webp`);

    return (
      <picture className={className}>
        <source type="image/webp" data-srcset={webPSrc} />
        <source type="image/png" data-srcset={imgSrc} />
        <img
          alt={alt}
          data-src={imgSrc}
          width={width}
          height={heigth}
          className="lazyload"
        />
      </picture>
    );
  }

  // eslint-disable-next-line import/no-dynamic-require
  const image = require(`../../../images/${src}?resize&sizes[]=640&sizes[]=768&sizes[]=1024`);
  // eslint-disable-next-line import/no-dynamic-require
  const imageWebP = require(`../../../images/${src}?resize&sizes[]=640&sizes[]=768&sizes[]=1024&format=webp`);

  return (
    <picture className={className}>
      <source type="image/webp" data-srcset={imageWebP.srcSet} />
      <img
        alt={alt}
        data-src={image.src}
        data-srcset={image.srcSet}
        width={width}
        height={heigth}
        className="lazyload"
      />
    </picture>
  );
};

export default Image;
