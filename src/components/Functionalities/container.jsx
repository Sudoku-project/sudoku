import React from 'react';

import FunctionalitiesView from './view';

import './style.scss';

const FunctionalitiesContainer = ({ grid, solve, setSudokuGrid, gridDone, gridID, setHasPreviousGames }) => {

  // If user give up,
  const handleGiveup = () => {
    // we solve the grid
    solve(grid);

    const solvedGrid = [...grid];

    // then update state
    setSudokuGrid(solvedGrid);


    // Delete this grid from local storage
    const grids = JSON.parse(localStorage.getItem('grids'));
    
    if(grids.length === 1) {
      localStorage.removeItem('grids');
      setHasPreviousGames(false);
    } else {
      grids.splice(gridID, 1);
      localStorage.setItem('grids', JSON.stringify(grids));
    };
  };

  // If user finished the grid,
  const handleGameOver = () => {
    // We solve the grid
    solve(grid);

    // We stringify it for compare it to the played grid
    const solvedGrid = JSON.stringify([...grid]);

    // and get the actual grid from user local storage
    const playedGrid = JSON.parse(localStorage.getItem('grids'));
    const gridToCheck = JSON.stringify(playedGrid[gridID]);

    console.log(gridToCheck);
    console.log(solvedGrid);

    if (gridToCheck === solvedGrid) {
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