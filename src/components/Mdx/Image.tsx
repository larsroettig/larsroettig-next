/*  eslint-disable global-require */
import React from 'react';
import 'lazysizes';
import Img from 'react-optimized-image';

interface iImage {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<iImage> = ({ src, alt, className = `` }) => {
  return (
    <Img
      webp
      // eslint-disable-next-line import/no-dynamic-require
      src={require(`../../../images/${src}`)}
      alt={alt}
      className={className}
    />
  );
};

export default Image;
