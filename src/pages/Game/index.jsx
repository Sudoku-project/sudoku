import React from 'react';

import Grid from "../../components/Grid";
import HomeButton from '../../components/HomeButton';

import './style.scss';

const Game = ({ sudokuGrid, setSudokuGrid, gridID, solve, setHasPreviousGames }) => {

  return (
    <div className='game'>
      
      <HomeButton />

      <Grid
        sudokuGrid={sudokuGrid}
        setSudokuGrid={setSudokuGrid}
        gridID={gridID}
        solve={solve}
        setHasPreviousGames={setHasPreviousGames}
      />

    </div>
  );
};

export default Game;