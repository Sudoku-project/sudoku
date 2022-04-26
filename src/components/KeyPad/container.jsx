import React from "react";
import KeyPadView from "./view";

import "./style.scss";

const KeyPadContainer = ({ setSudokuGrid, rowId, columnId, gridID }) => {
  const handleChangeNewNumber = (value) => {
    const grids = JSON.parse(localStorage.getItem("grids"));
    console.log(grids);
    grids[gridID][rowId][columnId] = value;
    setSudokuGrid(grids[gridID]);
    localStorage.setItem("grids", JSON.stringify(grids));
  };

  return <KeyPadView handleChangeNewNumber={handleChangeNewNumber} />;
};

export default KeyPadContainer;
