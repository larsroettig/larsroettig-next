import React from 'react';

import useMobileScreen from '@/shared/useMobileScreen';
import supporterList from './supporterList';
import SupporterItem from './Item';

const Supporter: React.FC = () => {
  const mobileScreen = useMobileScreen();

  const RandomSupporter: React.FC = () => {
    const random = Math.floor(Math.random() * supporterList.length);
    const supporter = supporterList[random];
    return (
      <SupporterItem
        website={supporter.website}
        image={supporter.image}
        alt={supporter.alt}
      />
    );
  };
  const SupporterList: React.FC = () => {
    const supporter = supporterList.map((data) => (
      <SupporterItem
        key={data.name}
        website={data.website}
        image={data.image}
        alt={data.alt}
      />
    ));
    return <>{supporter}</>;
  };

  return (
    <div className="p-5">
      {mobileScreen ? <SupporterList /> : <RandomSupporter />}
    </div>
  );
};

export default Supporter;
