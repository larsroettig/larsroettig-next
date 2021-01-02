/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Image from '@/components/Image/';
import Link from 'next/link';

interface iCard {
  title: string;
  href: string;
  description?: string;
  img?: string;
}

const Card: React.FC<iCard> = ({ title, href, description, img = `` }) => {
  const getImage = (src: string): any => {
    const image = require(`../../../images/${src}?resize&size=640`);
    const imageWebP = require(`../../../images/${src}?resize&size=640&format=webp`);
    return (
      <Image
        image={image}
        imageWebP={imageWebP}
        alt={`Teaser for ${title}`}
        width="480"
        heigth="270"
      />
    );
  };

  return (
    <div className="overflow-hidden shadow-lg">
      <Link href={href}>
        <a>
          {img ? getImage(img) : ``}
          <span className="flex items-center justify-between leading-tight p-2 md:p-4">
            <span className="text-lg">
              <p className="max-w-4xl text-lg sm:text-2xl font-medium">
                {title}
              </p>
              <p className="text-base pt-3">{description}</p>
            </span>
          </span>
        </a>
      </Link>
    </div>
  );
};

export default Card;
