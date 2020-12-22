import React from 'react';
import Img from 'react-optimized-image';
/*  eslint-disable global-require */
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
        {img ? (
          <Img
            webp
            // eslint-disable-next-line import/no-dynamic-require
            src={require(`../../../images/${img}`)}
            alt={`Teaser for ${title}`}
            sizes={[300, 600]}
          />
        ) : (
          ``
        )}
      </a>
      <div className="flex items-center justify-between leading-tight p-2 md:p-4">
        <span className="text-lg">
          <a className="no-underline text-black" href={href}>
            <p className="max-w-4xl text-lg sm:text-2xl font-medium">{title}</p>
            <p className="text-base">{description}</p>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Card;
