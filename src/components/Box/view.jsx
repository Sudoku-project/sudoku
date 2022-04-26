import React, { useRef } from "react";

import "./style.scss";

const BoxView = ({ handleKeyDown, numberInput, handleClickBox }) => {
  const inputRef = useRef(null);

  return (
    <input
      ref={inputRef}
      className="box"
      type="number"
      readOnly
      value={numberInput === 0 ? "" : numberInput}
      onKeyDown={(event) => {
        handleKeyDown(event);
      }}
      onClick={handleClickBox}
    />
  );
};

export default BoxView;
