import React from 'react';

import Image from '../Image';
import Container from '../Container';

const src = require(`./larsroettig.png`);
const webpSrc = require(`./larsroettig.png?webp`);
const previewSrc = require(`./larsroettig.png?lqip`);

const Hero: React.FC = () => (
  <div className="bg-gray-800 text-gray-100 p-10 pb-0 mb-10">
    <Container>
      <div className="flex flex-wrap -mx-2 overflow-hidden ">
        <div className="px-2 w-full overflow-hidden lg:w-1/2 xl:w-1/2">
          <Image
            className="w-96"
            src={src}
            webpSrc={webpSrc}
            previewSrc={previewSrc}
            alt="Profile"
          />
        </div>
        <div className="my-2 px-2 w-full overflow-hidden lg:w-1/2 xl:w-1/2">
          <div className="m-auto" style={{ maxWidth: `600px` }}>
            <h1 className="text-3xl tracking-tight sm:text-4xl">
              <span className="block font-extrabold py-5">
                Hi, I&apos;m Lars Roettig
              </span>
              <span className="block text-2xl">
                I write this blog about Software Architecture and Magento
                Development
              </span>
            </h1>
          </div>
        </div>
      </div>
    </Container>
  </div>
);

export default Hero;
