import React from 'react';
import 'lazysizes';

interface iImage {
  src: string;
  previewSrc: string;
  webpSrc: string;
  alt: string;
  className: string;
}

const Image: React.FC<iImage> = ({
  src,
  previewSrc,
  webpSrc,
  alt,
  className = ``,
}: iImage) => {
  return (
    <picture className={className}>
      <source type="image/webp" data-srcset={webpSrc} />
      <source type="image/png" data-srcset={src} />
      <img
        className={`lazyload blur ${className}`}
        alt={alt}
        src={previewSrc}
      />
    </picture>
  );
};

export default Image;
