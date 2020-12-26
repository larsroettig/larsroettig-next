/*  eslint-disable global-require */
import React from 'react';
import 'lazysizes';
import Image from '../Image';

interface iImage {
  src: string;
  alt: string;
  className?: string;
}

const Picture: React.FC<iImage> = ({ src, alt, className = `` }) => {
  const image = require(`../../../images/${src}?resize&sizes[]=640&sizes[]=768&sizes[]=1024&sizes[]=1280`);
  const imageWebP = require(`../../../images/${src}?resize&sizes[]=640&sizes[]=768&sizes[]=1024&sizes[]=1280&format=webp`);

  return (
    <Image
      image={image}
      imageWebP={imageWebP}
      width="1280"
      heigth="780"
      alt={alt}
      className={className}
      responsive
    />
  );
};
export default Picture;
