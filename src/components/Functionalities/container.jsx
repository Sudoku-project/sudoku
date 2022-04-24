import React from 'react';

import FunctionalitiesView from './view';

import './style.scss';

const FunctionalitiesContainer = ({ grid, solve, setSudokuGrid, gridDone }) => {

  // If user give up,
  const handleGiveup = () => {
    // we solve the grid
    solve(grid);

    const solvedGrid = [...grid];

    // then update state
    setSudokuGrid(solvedGrid);
  };

  // If user finished the grid,
  const handleGameOver = () => {
    // We solve the grid
    solve(grid);

    // We stringify it for compare it to the played grid
    const solvedGrid = JSON.stringify([...grid]);

    // and get the actual grid from user local storage
    const playedGrid = localStorage.getItem('grid');

    if (playedGrid === solvedGrid) {
      console.log('well played');
    } else {
      console.log('try again');
    };
  };

  return (
    <FunctionalitiesView
      handleGiveup={handleGiveup}
      handleGameOver={handleGameOver}
      gridDone={gridDone}
    />
  );
};

export default FunctionalitiesContainer;