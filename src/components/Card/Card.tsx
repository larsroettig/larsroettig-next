import React from 'react';
import Image from '@/components/Image/';

interface iCard {
  title: string;
  href: string;
  description?: string;
  img?: string;
}

const Card: React.FC<iCard> = ({ title, href, description, img = `` }) => {
  return (
    <div className="overflow-hidden shadow-lg">
      <a href={href}>
        {img ? <Image src={img} alt={`Teaser for ${title}`} responsive /> : ``}
      </a>
      <div className="flex items-center justify-between leading-tight p-2 md:p-4">
        <span className="text-lg">
          <a className="no-underline text-black" href={href}>
            <p className="max-w-4xl text-lg sm:text-2xl font-medium">{title}</p>
            <p className="text-base">
              <p>{description}</p>
            </p>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Card;
