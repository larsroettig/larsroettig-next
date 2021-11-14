import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import Container from '../components/Container';

const FourOhFour: NextPage = () => {
  return (
    <Container>
      <div
        className="prose lg:prose-xl max-w-full mb-10 text-center  p-20"
        style={{ height: `80vh` }}
      >
        <h1>404 - Page Not Found</h1>
        <Link href="/">Go back home</Link>
      </div>
    </Container>
  );
};

export default FourOhFour;
