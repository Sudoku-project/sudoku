import React, {useState, useEffect} from "react";
import GridView from "./view.jsx";

import { Util } from '../../utils/dataGrid.js';

const GridContainer = ({ difficulty }) => {
  const [sudokuGrid, setSudokuGrid] = useState([]);

  useEffect(() => {
  

    let puzzle = createPuzzle();

    setSudokuGrid(puzzle);

  }, []);

  console.log(sudokuGrid)

  // We verify if a case is a valid place for a number
  const isValidPlace = (grid, row, col, number) => {
    // For the 9 cases in each row,
    for (let i = 0; i < 9; i++) {
      // we verify for each matching column, if the number is valid
      if (grid[i][col] === number) {
        return false;
      }
    }

    // We do the same for each column
    for (let i = 0; i < 9; i++) {
      if (grid[row][i] === number) {
        return false;
      }
    }

    // And for each square
    // We initialize squares from y axes and x axes and we keep the modulo.
    // For example : In our "for loop" we are at the row loop number 5 => localSquareRow = 5 - (5 % 3)
    let localSquareRow = row - (row % 3);
    let localSquareCol = col - (col % 3);

    //! Commentaires à ajouter
    for (let i = localSquareRow; i < localSquareRow + 3; i++) {
      for (let j = localSquareCol; j < localSquareCol + 3; j++) {
        if (grid[i][j] === number) {
          return false;
        }
      }
    }

    return true;
  };

  const solve = (grid) => {
  
    // For each row,
    for (let row = 0; row < 9; row++) {
      // and each column,
      for (let col = 0; col < 9; col++) {
        // If each case
        if (grid[row][col] === 0) {
          // For each possibility of number between 1 and 10,
          for (let guess = 1; guess < 10; guess++) {
            // And if this number is on a valid case (means that the number is unique IN THE ROW & IN THE LINE & IN THE SQUARE)
            if (isValidPlace(grid, row, col, guess)) {
              // Then, we place this number on the right case
              grid[row][col] = guess;

              // If the entire grid is ok, we return true
              if (solve(grid)) {
            
                return true;
              }

              grid[row][col] = 0;
            }
          }
          return false;
        }
      }
    }
   setSudokuGrid(grid)
    return true;
  };

  const createPuzzle = () => {
    let puzzle = getRandomSudoku();
    solve(puzzle);
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (Math.random() > difficulty) {
          puzzle[i][j] = 0;
        }
      }
    }
    return puzzle;
  };

  const getRandomSudoku = () => {
    let puzzle = [];
    for (let i = 0; i < 9; i++) {
      puzzle[i] = Array(9).fill(0);
    }
    for (let i = 0; i < 8; i++) {
      let number = Math.floor(Math.random() * 8) + 1;
      while (!isValidPlace(puzzle, 0, i, number)) {
        number = Math.floor(Math.random() * 8) +  1;
      }
      puzzle[0][i] = number;
    }
    return puzzle;
  };
  // Fonction a appeler quand l'user vérifie la grille à la fin
  // solve(puzzle);

  return (
    <GridView
      grid={sudokuGrid}
      setSudokuGrid={setSudokuGrid}
      solveGrid={solve}
    />
  );
};

export default GridContainer;