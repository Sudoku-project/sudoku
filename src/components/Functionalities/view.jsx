import React from 'react';

import './style.scss';

const FunctionalitiesView = ({ solveGrid, grid, setSudokuGrid }) => {
console.log(grid)

  return (
    <section className='functionalities'>
      <button
        className='functionnalities--button'
        onClick={()=>solveGrid(grid)}
      >
        Résoudre
      </button>
      <button>
        Vérifier
      </button>
    </section>
  );
};

export default FunctionalitiesView;