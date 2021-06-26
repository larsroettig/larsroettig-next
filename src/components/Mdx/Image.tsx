/*  eslint-disable global-require */
import React from 'react';
import Image from 'next/image';

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
  width = `1280`,
  heigth = `780`,
  className = `py-8`,
}) => {
  return (
    <div className={className}>
      <Image
        src={`/images/${src}`}
        alt={alt}
        width={width}
        height={heigth}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMDg2tBwADfgF+TUPnsgAAAABJRU5ErkJggg==
        "
      />
    </div>
  );
};
export default Picture;
