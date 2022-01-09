import React from 'react';
import Image from 'next/image';
import Container from '../Container';

const Hero: React.FC = () => (
  <div className="bg-[#0e0e12] text-gray-100 p-10  mb-10">
    <Container>
      <div className="flex flex-wrap overflow-hidden justify-center justify-items-center ">
        <div className="overflow-hidden mt-10 mr-20">
          <Image
            className="hero-image"
            src="/images/larsroettig.jpg"
            alt="Profile"
            width={300}
            height={300}
          />
        </div>

        <div className="py-10 lg:my-10">
          <div className="m-auto" style={{ maxWidth: `600px` }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              <span className="block font-extrabold py-5">
                Hi, I&apos;m
                <span className="highlight-text"> Lars Roettig</span>
              </span>
              <span className="block text-2xl">
                Helping people write stable software with quality.
              </span>
            </h1>
          </div>
        </div>
      </div>
    </Container>
  </div>
);

export default Hero;
