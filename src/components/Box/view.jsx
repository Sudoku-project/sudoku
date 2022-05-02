import React, { useContext } from "react";

import { DarkModeContext } from '../../context/DarkModeContext';

import KeyPad from '../KeyPad';

import "./style.scss";

const BoxView = ({
  numberInput,
  setNumberInput,
  handleKeyDown,
  row,
  column,
  gridID,
  setGridDone,
  keyPadRef,
  handleHideKeyPad,
  showKeyPad,
  setShowKeyPad
}) => {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <input
        className={darkMode ? 'box dark' : 'box'}
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
