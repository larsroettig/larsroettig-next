import React from 'react';
import 'lazysizes';

interface iImage {
  image: any;
  imageWebP: any;
  alt: string;
  className?: string;
  width?: string;
  heigth?: string;
  responsive?: boolean;
}

const Image: React.FC<iImage> = ({
  image,
  imageWebP,
  alt,
  className = ``,
  width = `1024`,
  heigth = `576`,
  responsive = false,
}) => {
  if (responsive === false) {
    return (
      <picture className={className}>
        <source type="image/webp" data-srcset={imageWebP} />
        <img
          alt={alt}
          data-src={image}
          width={width}
          height={heigth}
          className="lazyload"
        />
      </picture>
    );
  }

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
