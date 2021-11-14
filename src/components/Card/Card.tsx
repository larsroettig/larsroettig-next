/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PostHeader } from '../../shared/Content';
import { modifyRouteRegex } from 'next/dist/lib/load-custom-routes';

interface CardProps {
  post: PostHeader;
}

const isUpdated = (
  createdAt: string,
  modifiedAt: string | undefined,
): boolean => {
  const creatDate = new Date(createdAt);
  const modiDate = new Date(modifiedAt || createdAt);
  const lastUpdate = modiDate >= creatDate ? modiDate : creatDate;
  const current = new Date();
  current.setDate(current.getDate() - 30);
  return current.getTime() <= lastUpdate.getTime();
};

const Card: React.FC<CardProps> = ({ post }) => {
  const { title, description, placeHolder, hero: img, modifiedAt, date } = post;
  const href = `/${post.slug}`;

  const getImage = (src: string): any => {
    return (
      <Image
        src={`/images/${src}`}
        alt={`Teaser for ${title}`}
        width="480"
        height="270"
        placeholder="blur"
        blurDataURL={placeHolder}
      />
    );
  };

  const update = isUpdated(date, modifiedAt) ? (
    <span className="px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-700 rounded">
      Update
    </span>
  ) : (
    ''
  );

  return (
    <div className="overflow-hidden shadow-lg">
      <Link href={href}>
        <a>
          <div className="relative">
            {img ? getImage(img) : ``}{' '}
            <div className="absolute top-2.5 right-2.5">{update}</div>
          </div>
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
