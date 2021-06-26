import React from 'react';
import { Image } from '@/components/Mdx';
import useMobileScreen from '@/shared/useMobileScreen';

interface SupporterProps {
  website: string;
  image: {
    desktop: string;
    mobile: string;
  };
  alt: string;
}

const SupporterItem: React.FC<SupporterProps> = (props) => {
  const mobileScreen = useMobileScreen();
  const { website, image, alt } = props;

  const SupporterImage = mobileScreen ? (
    <Image src={image.mobile} alt={alt} width="728" heigth="90" />
  ) : (
    <Image src={image.desktop} alt={alt} width="300" heigth="600" />
  );
  return (
    <div className="py-2" data-cy="supporter-image">
      <a href={website}>{SupporterImage}</a>
    </div>
  );
};

export default SupporterItem;
