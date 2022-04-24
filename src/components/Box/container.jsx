import React, { useState } from 'react';
import BoxView from './view';

import './style.scss';

const BoxContainer = ({ number, row, column, setGridDone }) => {

  const [numberInput, setNumberInput] = useState(number);

  const handleKeyDown = (event) => {

    // Transform string into integer
    const newNumber = parseInt(event.key, 10);

    // If the key pressed is a number between 1 & 9
    if(newNumber > 0 && newNumber < 10) {

      // Then update state
      setNumberInput(newNumber);
      
      // Get previous grid from local storage
      const previousGrid = JSON.parse(localStorage.getItem('grid'));
      
      // Copy previous grid in a the new const
      const grid = [...previousGrid];
      
      // Then change the right number
      grid[row][column] = newNumber;
      
      // Stringify this grid
      const newGrid = JSON.stringify(grid);

      // We can finally push this new grid in local storage for save the game
      localStorage.setItem('grid', newGrid);
      
      if(!newGrid.includes(0)) {
        setGridDone(true);
      };
    };
  };

  return (
    <BoxView
      handleKeyDown={handleKeyDown}
      number={numberInput}
    />
  );
};

export default BoxContainer;