import React from 'react';

import './style.scss';

const FunctionalitiesView = ({ solveGrid, grid, setSudokuGrid }) => {
console.log(grid)

  return (
    <section className='functionalities'>
      <button
        className='functionalities--button functionalities--button--solve'
        onClick={()=> {
          solveGrid(grid);
          // const solved = solveGrid(grid);
          // setSudokuGrid(solved);
        }}
      >
        Résoudre
      </button>
      <button
        className='functionalities--button functionalities--button--verify'
      >
        Vérifier
      </button>
    </section>
  );
};

export default FunctionalitiesView;