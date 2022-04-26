import React from 'react';
import KeyPadView from './view';

import './style.scss';

const KeyPadContainer = ({ setNumberFromKeyPad }) => {

  return (
    <KeyPadView
      setNumberFromKeyPad={setNumberFromKeyPad}
    />
  );
};

export default KeyPadContainer;