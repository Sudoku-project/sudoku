import React, { useState } from 'react';
import KeyPadView from './view';

import './style.scss';

const KeyPadContainer = () => {

  const [numberInput, setNumberInput] = useState(0);

  return (
    <KeyPadView
      setNumberInput={setNumberInput}
    />
  );
};

export default KeyPadContainer;