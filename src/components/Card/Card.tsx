/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const isUpdated = (
  createdAt: string | undefined,
  modifiedAt: string | undefined,
): boolean => {
  if (!createdAt || !modifiedAt) {
    return false;
  }

  const creatDate = new Date(createdAt);
  const modiDate = new Date(modifiedAt || createdAt);
  const lastUpdate = modiDate >= creatDate ? modiDate : creatDate;
  const current = new Date();
  current.setDate(current.getDate() - 30);
  return current.getTime() <= lastUpdate.getTime();
};

type CardProps = {
  post: FrontmatterType;
};

const Card = ({ post }: CardProps) => {
  const { title, description, placeHolder, hero: img, modifiedAt, date } = post;
  const href = `/${post.slug}`;

  const getImage = (src: string): any => {
    const blurDataURL = placeHolder as string;

    return (
      <Image
        src={`/images/${src}`}
        alt={`Teaser for ${title}`}
        width="551"
        height="310"
        className="rounded-md"
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
    );
  };

  const update = isUpdated(date, modifiedAt) ? (
    <span className="px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-700 rounded">
      Update
    </span>
  ) : (
    ``
  );

  return (
    <div className="overflow-hidden hover:shadow-md rounded-b-md">
      <Link href={href}>
        <a>
          <div className="relative">
            {img ? getImage(img) : ``}
            {` `}
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
