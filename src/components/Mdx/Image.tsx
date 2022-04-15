/*  eslint-disable global-require */
import React from 'react';
import Image from 'next/image';

interface iImage {
  src: string;
  alt: string;
  responsive?: boolean;
  width?: string;
  height?: string;
  className?: string;
}

const Picture = (props: iImage) => {
  const {
    src,
    alt,
    width = `1280`,
    height = `780`,
    className = `py-8`,
  } = props;

  return (
    <div className={className}>
      <Image
        src={`/images/${src}`}
        className="rounded-md"
        alt={alt}
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMDg2tBwADfgF+TUPnsgAAAABJRU5ErkJggg==
        "
      />
    </div>
  );
};
export default Picture;
