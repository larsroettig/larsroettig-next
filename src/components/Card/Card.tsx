import React from 'react';
import Image from '@/components/Image/';

interface iCard {
  title: string;
  href: string;
  description?: string;
  img?: string;
}

const Card: React.FC<iCard> = ({ title, href, description, img = `` }) => {
  const getImage = (src: string): any => {
    const image = require(`../../../images/${src}?resize&sizes[]=240&sizes[]=480&sizes[]=640`);
    const imageWebP = require(`../../../images/${src}?resize&sizes[]=240&sizes[]=480&sizes[]=640&format=webp`);
    return (
      <Image
        image={image}
        imageWebP={imageWebP}
        alt={`Teaser for ${title}`}
        responsive
      />
    );
  };

  return (
    <div className="overflow-hidden shadow-lg">
      <a href={href}>{img ? getImage(img) : ``}</a>
      <div className="flex items-center justify-between leading-tight p-2 md:p-4">
        <span className="text-lg">
          <a className="no-underline text-black" href={href}>
            <p className="max-w-4xl text-lg sm:text-2xl font-medium">{title}</p>
            <p className="text-base pt-3">{description}</p>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Card;
