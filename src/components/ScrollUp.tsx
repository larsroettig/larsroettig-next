import React from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import { FaArrowUp } from 'react-icons/fa';

const ScrollUp: React.FC = () => (
  <ScrollUpButton
    ContainerClassName="scroll-container"
    TransitionClassName="scroll-transtion"
  >
    <FaArrowUp size="1.2em" />
  </ScrollUpButton>
);

export default ScrollUp;
