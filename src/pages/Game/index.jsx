import React, { useContext } from 'react';

import { DarkModeContext } from '../../context/DarkModeContext';

import Grid from "../../components/Grid";
import HomeButton from '../../components/HomeButton';

import './style.scss';

const Game = ({ sudokuGrid, setSudokuGrid, gridID, solve, setHasPreviousGames }) => {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'game dark' : 'game'}>
      
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