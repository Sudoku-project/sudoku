import React from 'react';

import FunctionalitiesView from './view';

import './style.scss';

const FunctionalitiesContainer = ({ solveGrid, grid, setSudokuGrid }) => {

  return (
    <FunctionalitiesView
      solveGrid={solveGrid}
      grid={grid}
      setSudokuGrid={setSudokuGrid}
    />
  );
};

export default FunctionalitiesContainer;