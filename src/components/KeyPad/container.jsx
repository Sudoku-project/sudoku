import React, { useEffect } from 'react';
import KeyPadView from './view';

import './style.scss';

const KeyPadContainer = ({ setNumberInput }) => {

  return (
    <KeyPadView
      setNumberInput={setNumberInput}
    />
  );
};

export default KeyPadContainer;