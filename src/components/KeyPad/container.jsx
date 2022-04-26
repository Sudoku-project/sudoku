import React from "react";
import KeyPadView from "./view";

import "./style.scss";

const KeyPadContainer = ({ setSudokuGrid, rowId, columnId, gridID, setGridDone }) => {

  const handleChangeNewNumber = (value) => {
    // Get grids save from local storage
    const grids = JSON.parse(localStorage.getItem("grids"));
    
    // Change the right number in the right grid, in the right row, in the right column
    grids[gridID][rowId][columnId] = value;

    // & update the state
    setSudokuGrid(grids[gridID]);
    
    // without forgetting to save updated grids in local storage
    localStorage.setItem("grids", JSON.stringify(grids));

    const gridToChek = JSON.stringify(grids[gridID]);

    if(!gridToChek.includes(0)) {
      setGridDone(true);
    };
  };

  return (
    <KeyPadView 
      handleChangeNewNumber={handleChangeNewNumber}
    />
  );
};

export default KeyPadContainer;
