import React from 'react';
import dynamic from 'next/dynamic';
import Container from '../Container';

const Card = dynamic(() => import(`./Card`));

interface GridProps {
  posts: FrontmatterType[];
}

const Grid: React.FC<GridProps> = ({ posts }) => {
  return (
    <Container>
      <h2 className="text-4xl sm:text-5xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
        Blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 content-auto">
        {posts.map((post) => (
          <Card key={post.slug} post={post} />
        ))}
      </div>
    </Container>
  );
};

export default Grid;
