import React from 'react';

import './style.scss';

const BoxView = ({ handleKeyDown, number }) => {

  return (
    <input
      className='box'
      type='number'
      readOnly
      value={number === 0 ? '' : number}
      onKeyDown={(event) => {
        handleKeyDown(event);
      }}
    />
  );
};

export default BoxView;