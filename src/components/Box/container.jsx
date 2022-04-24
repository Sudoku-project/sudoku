import React, { useState } from 'react';
import BoxView from './view';

import './style.scss';

const BoxContainer = () => {

  const [number, setNumber] = useState('0');

  const handleKeyDown = (event) => {
    if(
      event.key === '1' ||
      event.key === '2' ||
      event.key === '3' ||
      event.key === '4' ||
      event.key === '5' ||
      event.key === '6' ||
      event.key === '7' ||
      event.key === '8' ||
      event.key === '9'
    ) {
      const previousGrid = JSON.parse(localStorage.getItem('grid'));
      console.log(previousGrid);
      setNumber(event.key);
    };
  };

  return (
    <BoxView
      handleKeyDown={handleKeyDown}
      number={number}
    />
  );
};

export default BoxContainer;