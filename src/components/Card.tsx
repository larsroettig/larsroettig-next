import React from 'react';

interface iCard {
  title: string;
  href: string;
  author: string;
  date: string;
  img?: string;
}

const Card: React.FC<iCard> = ({ title, href, author, date, img = `` }) => {
  return (
    <div className="my-2 px-2 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <a href={href}>
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            src="https://picsum.photos/600/400/?random"
          />
        </a>
        <div className="flex items-center justify-between leading-tight p-2 md:p-4">
          <span className="text-lg">
            <a className="no-underline hover:underline text-black" href={href}>
              {title}
            </a>
          </span>
          <p className="text-grey-darker text-sm">{date}</p>
        </div>

        <div className="flex items-center justify-between leading-none p-2 md:p-4">
          <a
            className="flex items-center no-underline hover:underline text-black"
            href={href}
          >
            <p className="ml-2 text-sm">{author}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
