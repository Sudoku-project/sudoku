import React, { useEffect, useState } from "react";
import GridView from './view.jsx';

const GridContainer = () => {

  const [grid, setGrid] = useState();
  
  const [squares, setSquares] = useState();

  const [lines, setLines] = useState([]);

  const [columns, setColumns] = useState([]);

  useEffect(() => {
    generateFirstRow();
  }, []);

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateFirstRow = () => {

    // Init array for the first line of the grid
    let linesArray = [[], [], [], [], [], [], [], [], []];
    let squaresArray = [[], [], [], [], [], [], [], [], []];
    let columnsArray = [[], [], [], [], [], [], [], [], []];

    // For 9 differents numbers,
    for (let i = 0; i < 9;)  {
      // We generate a new random number between 1 and 9
      const newNumber = randomNumber(1, 9);

      // If this random number isn't already in our first line,
      if (!linesArray[0].includes(newNumber)) {
        // We push it in our line
        linesArray[0].push(newNumber);
        // Then, we increase i
        i++;
      };
    };

    // We push the three numbers for the right three squares
    squaresArray[0].push([linesArray[0][0], linesArray[0][1], linesArray[0][2]]);
    squaresArray[1].push([linesArray[0][3], linesArray[0][4], linesArray[0][5]]);
    squaresArray[2].push([linesArray[0][6], linesArray[0][7], linesArray[0][8]]);

   
    
    for (let i = 0; i < 9; i++) {
      columnsArray[i].push(linesArray[0][i]);
    };
    console.log('squaresArray = ', squaresArray)
    console.log('colonnes = ', columnsArray);
    console.log('lignes = ', linesArray);
  };


	return (
    <>
    	<GridView />
    </>
  );
};

export default GridContainer;