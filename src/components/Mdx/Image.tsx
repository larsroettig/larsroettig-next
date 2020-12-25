/*  eslint-disable global-require */
import React from 'react';
import 'lazysizes';
import Image from '../Image';

interface iImage {
  src: string;
  alt: string;
  className?: string;
}

const Picture: React.FC<iImage> = ({ src, alt, className = `` }) => (
  <Image src={src} alt={alt} className={className} responsive />
);
export default Picture;
