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
    squaresArray[0].push(linesArray[0][0], linesArray[0][1], linesArray[0][2]);
    squaresArray[1].push(linesArray[0][3], linesArray[0][4], linesArray[0][5]);
    squaresArray[2].push(linesArray[0][6], linesArray[0][7], linesArray[0][8]);

    // for the 9 colums, we push the right number in the first index of every array in columns
    for (let i = 0; i < 9; i++) {
      columnsArray[i].push(linesArray[0][i]);
    };

    generateSecondeRow(linesArray, squaresArray, columnsArray);
  };



  const generateSecondeRow = (linesArray, squaresArray, columnsArray) => {

    let j = 0;
    let i;

    for (i = 0; i < 9;)  {
      const newNumber = randomNumber(1, 9);
      // We change conditions for push in arrays
      if (
        ( !linesArray[1].includes(newNumber) &&
          !columnsArray[i].includes(newNumber) && 
          !squaresArray[j].includes(newNumber)
        )    
      ) {

       console.log('i', i)
       console.log('j', j)
      //linesArray[1].push(newNumber);
      //  columnsArray[i].push(newNumber);
      //  squaresArray[j].push(newNumber);

        i++;
        if (i === 3 ) {
          j++;
        } else if ( i === 6 ) {
          j++;
        };
        
      
      } 
     
      
    };
  
  
  console.log('linesArray', linesArray)
  console.log('squaresArray', squaresArray)
  console.log('columnsArray', columnsArray)  

  };


	return (
    <>
    	<GridView />
    </>
  );
};

export default GridContainer;