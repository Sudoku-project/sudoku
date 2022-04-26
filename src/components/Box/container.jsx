import React, { useState } from "react";
import BoxView from "./view";

import "./style.scss";

const BoxContainer = ({
  row,
  column,
  setGridDone,
  gridID,
  number,
  setColumnId,
  setRowId,
}) => {

  const [numberInput, setNumberInput] = useState(number);

  const handleKeyDown = (event) => {
    // Transform string into integer
    const newNumber = parseInt(event.key, 10);

    // If the key pressed is a number between 1 & 9
    if (newNumber > 0 && newNumber < 10) {
      // Then update state
      setNumberInput(newNumber);

      // Get previous grid from local storage
      const previousGrids = JSON.parse(localStorage.getItem("grids"));

      // Copy previous grid in a the new const
      const grids = [...previousGrids];

      // Then change the right number in the right grid
      grids[gridID][row][column] = newNumber;

      // Stringify new grids
      const newGrids = JSON.stringify(grids);

      // We can finally push this new grid in local storage for save the game
      localStorage.setItem("grids", newGrids);

      // We check if our actual grid is complete
      const gridToCheck = JSON.stringify(grids[gridID]);

      // if our grid don't contains any 0,
      if (!gridToCheck.includes(0)) {
        // update state
        setGridDone(true);
      }
    }
  };

  const handleClickBox = () => {
    setRowId(row);
    setColumnId(column);
  };

  return (
    <BoxView
      handleKeyDown={handleKeyDown}
      numberInput={numberInput}
      number={number}
      handleClickBox={handleClickBox}
    />
  );
};

export default BoxContainer;
