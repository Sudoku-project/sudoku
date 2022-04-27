import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Game from './pages/Game';
import Previous from './pages/Previous';
import NotFound from './pages/NotFound';

import './styles/index.scss';

const App = () => {

  const [difficulty, setDifficulty] = useState(0.4);
  const [hasPreviousGames, setHasPreviousGames] = useState(false);
  const [sudokuGrid, setSudokuGrid] = useState([]);
  const [gridID, setGridID] = useState(0);

  useEffect(() => {
    const previousGames = localStorage.getItem('grids');
  
    if(previousGames) {
      setHasPreviousGames(true);
    };
  }, []);

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

              // If the entire grid is ok,
              if (solve(grid)) {
                // we return true
                return true;
              }

              grid[row][col] = 0;
            }
          }
          return false;
        }
      }
    }
    // setSudokuGrid(grid)
    return true;
  };

  const createPuzzle = () => {
    // Get a random grid and solve it
    let puzzle = getRandomSudoku();
    solve(puzzle);

    // then remplace some numbers with a 0 for hide it in JSX
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
    // Init an empty array and fill it with only 0
    let puzzle = [];
    for (let i = 0; i < 9; i++) {
      puzzle[i] = Array(9).fill(0);
    }

    // verify in every case if the place is valid
    for (let i = 0; i < 8; i++) {
      let number = Math.floor(Math.random() * 8) + 1;
      while (!isValidPlace(puzzle, 0, i, number)) {
        number = Math.floor(Math.random() * 8) +  1;
      }
      // if yes, place a number
      puzzle[0][i] = number;
    }
    return puzzle;
  };
  
  const newGame = () => {
    let puzzle = createPuzzle();

    // set this new puzzle in state
    setSudokuGrid(puzzle);

    // if user already played grids before this game,
    if(hasPreviousGames) {
      // get them from local storage & parse them
      const previousGames = JSON.parse(localStorage.getItem('grids'));

      // set the ID of actual new grid from length of the previousGames
      setGridID(previousGames.length);

      // set the new grid in local storage with the previous
      const games = [...previousGames, puzzle];
      localStorage.setItem('grids', JSON.stringify(games));
    } else {
      // If this is the first game for user, just set this grid in local storage for save it
      const games = [puzzle];
      localStorage.setItem('grids', JSON.stringify(games));

      // & update state
      setHasPreviousGames(true);
    };
  };

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path='/'
          element={
            <Home
              newGame={newGame}
              setDifficulty={setDifficulty}
              hasPreviousGames={hasPreviousGames}
            />
          }
        />

        <Route
          path='/game'
          element={
            <Game
              sudokuGrid={sudokuGrid}
              setSudokuGrid={setSudokuGrid}
              gridID={gridID}
              solve={solve}
              setHasPreviousGames={setHasPreviousGames}
            />
          }
        />

        <Route
          path='/list'
          element={ 
            hasPreviousGames ? 
              <Previous 
                setSudokuGrid={setSudokuGrid}
                setGridID={setGridID}
              /> 
            : 
              <Navigate to='/' /> 
          }
        />

        <Route path="/*" element={ <NotFound /> } />

      </Routes>

    </BrowserRouter>
  );
};

export default App;