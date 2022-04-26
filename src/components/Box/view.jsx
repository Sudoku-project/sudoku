import React from 'react';

import './style.scss';

const BoxView = ({ handleKeyDown, number, setShowKeyPad }) => {

  return (
    <input
      className='box'
      type='number'
      readOnly
      value={number === 0 ? '' : number}
      onFocus={() => {
        setShowKeyPad(true);
      }}
      onBlur={() => {
        setShowKeyPad(false);
      }}
      onKeyDown={(event) => {
        handleKeyDown(event);
      }}
    />
  );
};

export default BoxView;