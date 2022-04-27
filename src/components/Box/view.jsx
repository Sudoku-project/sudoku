import React from "react";

import KeyPad from '../KeyPad';

import "./style.scss";

const BoxView = ({ numberInput, setNumberInput, handleKeyDown, row, column, gridID, setGridDone, keyPadRef, handleHideKeyPad, showKeyPad, setShowKeyPad }) => {

  return (
    <>
      <input
        className="box"
        type="number"
        readOnly
        value={numberInput === 0 ? "" : numberInput}
        onBlur={() => {
          handleHideKeyPad();
        }}
        onFocus={() => {
          setShowKeyPad(true);
        }}
        onKeyDown={(event) => {
          handleKeyDown(event);
        }}
      />

      {showKeyPad && (
        <KeyPad
          setNumberInput={setNumberInput}
          row={row}
          column={column}
          gridID={gridID}
          setGridDone={setGridDone}
          keyPadRef={keyPadRef}
          handleHideKeyPad={handleHideKeyPad}
        />
      )}
    </>
  );
};

export default BoxView;
