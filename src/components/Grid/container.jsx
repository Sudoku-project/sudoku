import React, { useEffect, useState } from "react";
import GridView from './view.jsx';

const GridContainer = () => {

  // const [grid, setGrid] = useState();
  
  // const [squares, setSquares] = useState([]);
  const [rows, setRows] = useState([]);
  // const [columns, setColumns] = useState([]);

  useEffect(() => {
    generateFirstNumber();
  }, []);

  // Simple random number generator
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Pas besoin de cette fonction, juste randomize les index dès le premier chiffre
  const generateFirstNumber = () => {

    // Initialize array for the grid
    let rowsArray = [[], [], [], [], [], [], [], [], []];
    let squaresArray = [[], [], [], [], [], [], [], [], []];
    let columnsArray = [[], [], [], [], [], [], [], [], []];

    // Get the first number with our random number generator
    const firstNumber = getRandomNumber(1, 9);

    rowsArray[0].push(firstNumber);
    columnsArray[0].push(firstNumber);
    squaresArray[0].push(firstNumber);

    console.log('Premier nombre =', firstNumber);

    generateFirstRow(firstNumber, rowsArray, columnsArray, squaresArray);
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Generating the first row of the grid
  const generateFirstRow = (firstNumber, rowsArray, columnsArray, squaresArray) => {


    const numbersLeft = [...numbers];

    // Index for squares, that is increased every 3 numbers in each row
    let j = 0;

    const indexOfFirstNumber = firstNumber - 1;
    numbersLeft.splice(indexOfFirstNumber, 1);

    for (let i = 0; i < 8;) {

      // For the first row, we randomize the selection of a number between 1 & 9
      const maxForRandomNumber = numbersLeft.length;
      const randomIndex = getRandomNumber(1, maxForRandomNumber) -1;

      i++;

      // We increase the index for squares every 3 times
      if (i === 3) {
        j++;
      } else if (i === 6) {
        j++;
      };

      // We push the random number in right row, right column & right square
      rowsArray[0].push(numbersLeft[randomIndex]);
      columnsArray[i].push(numbersLeft[randomIndex]);
      squaresArray[j].push(numbersLeft[randomIndex]);

      // Then we delete it from our numbers left
      numbersLeft.splice(randomIndex, 1);
    };
    
    generateSecondRow(rowsArray, columnsArray, squaresArray);
  };

  //          *****     MESSAGE POUR LUNDI      *****

  //          TENTER EN COMMENCANT PAR LES CARRÉ PLUTOT QUE PAR LES LIGNES ? (à réfléchir sérieusement)

  const generateSecondRow = (rowsArray, columnsArray, squaresArray) => {
    const numbersLeft = [...numbers];

    let j = 0;

    for (let i = 0; i < 9; i++) {

      if (i === 3) {
        j++;
      } else if (i === 6) {
        j++;
      };

      const filteredNumbers = numbersLeft.filter((number) => {
        // If the numbers left don't includes numbers in the same square,
        if (!squaresArray[j].includes(number)) {
          // We can save it in the filtered array
          return number;
        };
      });

      // Get random index from our filtered array
      const maxForRandomNumber = filteredNumbers.length;
      const randomIndex = getRandomNumber(1, maxForRandomNumber) -1;

      // Then, again, we push right number in right array
      rowsArray[1].push(filteredNumbers[randomIndex]);
      columnsArray[i].push(filteredNumbers[randomIndex]);
      squaresArray[j].push(filteredNumbers[randomIndex]);

      // Re filter numberLeft pour splice le bon number ??
      const indexToSplice = numbersLeft.indexOf(filteredNumbers[randomIndex]);
      numbersLeft.splice(indexToSplice, 1);
    };

    console.log('Lignes', rowsArray);
    console.log('Colonnes', columnsArray);
    console.log('Carrés', squaresArray);
  };


	return (
    <>
    	<GridView
        rows={rows}
      />
    </>
  );
};

export default GridContainer;