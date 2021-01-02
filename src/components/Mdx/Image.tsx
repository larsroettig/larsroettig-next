/*  eslint-disable global-require */
import React from 'react';
import 'lazysizes';
import Image from '../Image';

interface iImage {
  src: string;
  alt: string;
  responsive?: boolean;
  width?: string;
  heigth?: string;
  className?: string;
}

const Picture: React.FC<iImage> = ({
  src,
  alt,
  responsive = true,
  width = `1280`,
  heigth = `780`,
  className = ``,
}) => {
  if (responsive === true) {
    const image = require(`../../../images/${src}?resize&sizes[]=640&sizes[]=768&sizes[]=1024&sizes[]=1280`);
    const imageWebP = require(`../../../images/${src}?resize&sizes[]=640&sizes[]=768&sizes[]=1024&sizes[]=1280&format=webp`);
    return (
      <Image
        image={image}
        imageWebP={imageWebP}
        width={width}
        heigth={heigth}
        alt={alt}
        className={className}
        responsive
      />
    );
  }

  const image = require(`../../../images/${src}`);
  const imageWebP = require(`../../../images/${src}?format=webp`);
  return (
    <Image
      image={image}
      imageWebP={imageWebP}
      width={width}
      heigth={heigth}
      alt={alt}
      className={className}
    />
  );
};
export default Picture;
