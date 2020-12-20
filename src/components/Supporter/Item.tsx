import React from 'react';
import { Image } from '@/components/Mdx';
import useMobileScreen from '@/shared/useMobileScreen';

interface Supporter {
  name: string;
  website: string;
  image: {
    desktop: string;
    mobile: string;
  };
  alt: string;
  follow: boolean;
}

interface SupporterProps {
  supporter: Supporter;
}

const SupporterItem: React.FC<SupporterProps> = (supporter) => {
  const mobileScreen = useMobileScreen();

  const { website, image, alt } = supporter.supporter;
  const SupporterImage = mobileScreen ? (
    <Image src={image.mobile} alt={alt} />
  ) : (
    <Image src={image.desktop} alt={alt} />
  );
  return (
    <div className="py-2" data-cy="supporter-image">
      <a href={website}>{SupporterImage}</a>
    </div>
  );
};

export default SupporterItem;
