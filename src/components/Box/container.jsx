import React, { useState, useRef } from "react";
import BoxView from "./view";

import "./style.scss";

const BoxContainer = ({ row, column, setGridDone, gridID, number }) => {

  const keyPadRef = useRef(null);

  const [numberInput, setNumberInput] = useState(number);
  const [showKeyPad, setShowKeyPad] = useState(false);

  const handleKeyDown = (event) => {

    if(event.key === 'Delete' || event.key === 'Backspace') {
      setNumberInput(0);

      // Get previous grid from local storage
      const previousGrids = JSON.parse(localStorage.getItem("grids"));
      
      // Copy previous grid in a the new const
      const grids = [...previousGrids];

      // Then change the right number in the right grid
      grids[gridID].grid[row][column] = 0;

      // Stringify new grids
      const newGrids = JSON.stringify(grids);

      // We can finally push this new grid in local storage for save the game
      localStorage.setItem("grids", newGrids);

      setGridDone(false);
      
    } else {
      // Transform string into integer
      const newNumber = parseInt(event.key, 10);

      // If the key pressed is a number between 1 & 9
      if (newNumber > 0 && newNumber < 10) {
        // same logic thant before
        setNumberInput(newNumber);
        const previousGrids = JSON.parse(localStorage.getItem("grids"));
        const grids = [...previousGrids];
        grids[gridID].grid[row][column] = newNumber;
        const newGrids = JSON.stringify(grids);
        localStorage.setItem("grids", newGrids);
        const gridToCheck = JSON.stringify(grids[gridID].grid);

        // if our grid don't contains any 0,
        if (!gridToCheck.includes(0)) {
          // update state
          setGridDone(true);
        };
      };
    };
  };

  const handleHideKeyPad = () => {
    keyPadRef.current.style.opacity = 0;

    setTimeout(() => {
      setShowKeyPad(false);
    }, 300);
  };

  return (
    <BoxView
      numberInput={numberInput}
      setNumberInput={setNumberInput}
      handleKeyDown={handleKeyDown}
      row={row}
      column={column}
      gridID={gridID}
      setGridDone={setGridDone}
      keyPadRef={keyPadRef}
      handleHideKeyPad={handleHideKeyPad}
      showKeyPad={showKeyPad}
      setShowKeyPad={setShowKeyPad}
    />
  );
};

export default BoxContainer;
