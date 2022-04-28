import React from "react";
import KeyPadView from "./view";

import "./style.scss";

const KeyPadContainer = ({ setNumberInput, row, column, gridID, setGridDone, keyPadRef, handleHideKeyPad }) => {

  const handleChangeNumber = (value) => {

    const newNumber = value;

    setNumberInput(newNumber);

    // Get grids save from local storage
    const previousGrids = JSON.parse(localStorage.getItem("grids"));

    const grids = [...previousGrids]
    
    // Change the right number in the right grid, in the right row, in the right column
    grids[gridID].grid[row][column] = newNumber;

    // & update the state
    // setSudokuGrid(grids[gridID]);
    
    // without forgetting to save updated grids in local storage
    localStorage.setItem("grids", JSON.stringify(grids));

    const gridToCheck = JSON.stringify(grids[gridID].grid);

    if(!gridToCheck.includes(0)) {
      setGridDone(true);
    };

    handleHideKeyPad();
  };

  return (
    <KeyPadView
      handleChangeNumber={handleChangeNumber}
      keyPadRef={keyPadRef}
    />
  );
};

export default KeyPadContainer;
