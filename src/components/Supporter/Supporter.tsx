import React from 'react';
import { useMobileScreen } from '@/shared/useMobileScreen';
import supporterList from './supporterList';
import SupporterItem from './Item';

const Supporter: React.FC = () => {
  const mobileScreen = useMobileScreen();

  const RandomSupporter: React.FC = () => {
    const random = Math.floor(Math.random() * supporterList.length);
    const supporter = supporterList[random];
    return <SupporterItem supporter={supporter} />;
  };
  const SupporterList: React.FC = () => {
    const supporter = supporterList.map((data) => (
      <SupporterItem key={data.name} supporter={data} />
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
