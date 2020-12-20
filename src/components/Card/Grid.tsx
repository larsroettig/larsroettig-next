import React from 'react';
import { compareDesc } from 'date-fns';

import { PostHeader } from '@/shared/Content';
import Container from '../Container';
import Card from './Card';

interface GridProps {
  posts: PostHeader[];
}

const Grid: React.FC<GridProps> = ({ posts }) => {
  return (
    <Container>
      <h2 className="text-4xl sm:text-5xl  leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
        Blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {posts
          .sort((first, second) =>
            compareDesc(
              new Date(first.modifiedAt),
              new Date(second.modifiedAt),
            ),
          )
          .map((post) => (
            <Card
              key={post.slug}
              title={post.title}
              description={post.description}
              href={`/${post.slug}`}
              img={post.hero}
            />
          ))}
      </div>
    </Container>
  );
};

export default Grid;
