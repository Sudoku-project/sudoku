import React, { useRef } from 'react';

import './style.scss';

const BoxView = ({ handleKeyDown, numberInput, setInputFocused, number }) => {

  const inputRef = useRef(null);

  return (
    <input
      
      ref={inputRef}
      className='box'
      type='number'
      readOnly
      value={number === 0 ? '' : numberInput}
      onKeyDown={(event) => {
        handleKeyDown(event);
      }}
      onClick={()=>setInputFocused(inputRef.current)}
    />
  );
};

export default BoxView;