import React, { useEffect, useState } from "react";
import GridView from './view.jsx';

const GridContainer = () => {

  const [grid, setGrid] = useState();

  useEffect(() => {
    generateFirstRow();
  }, []);

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateFirstRow = () => {

    // Init array for the first line of the grid
    let firstLine = [];
    
    // For 9 differents numbers,
    for (let i = 0; i < 9;)  {
      // We generate a new random number between 1 and 9
      const newNumber = randomNumber(1, 9);

      // If this random number isn't already in our first line,
      if (!firstLine.includes(newNumber)) {
        // We push it in our line
        firstLine.push(newNumber);
        // Then, we increase i
        i++;
      };
    };
    
    // When our for loop is done, we generate second line
    generateSecondRow(firstLine);
  };

  const generateSecondRow = (firstLine) => {
    
    let secondLine = [];

    for (let i = 0; i < 9;) {

      // We generate a new line of unique int between 1 and 9
      const newNumber = randomNumber(1, 9);

      // if my second line don't include my new number
      if (!secondLine.includes(newNumber)) {
          
        for (let j = 0; j < 3;){
          if (firstLine[0] === newNumber || firstLine[1] === newNumber || firstLine[2] === newNumber) {
            return;
          } else {
            secondLine.push(newNumber);
            i++;
            j++;
          };
        };

        for (let j = 0; j < 3;){
          if (firstLine[3] === newNumber || firstLine[4] === newNumber || firstLine[5] === newNumber) {
            return;
          } else {
            secondLine.push(newNumber);
            i++;
            j++;
          };
        };

        for(let j = 0; j < 3;){
          
          if (firstLine[6] === newNumber || firstLine[7] === newNumber || firstLine[8] === newNumber) {
            return;
          } else {
            secondLine.push(newNumber);
            i++;
            j++;
          };
        };

      };

      console.log('line 1 = ' + firstLine);
      console.log('line 2 = ' + secondLine);
    };
  };

	return (
    <>
    	<GridView />
    </>
  );
};

export default GridContainer;