import React from 'react';
import { NextSeo } from 'next-seo';
import Hero from '@/components/Hero';

const Home: React.FC = () => (
  <>
    <NextSeo
      title="Blog - Lars Roettig"
      description="A blog about Software and Magento Development"
    />
    <div>
      <Hero />
    </div>
  </>
);

export default Home;
