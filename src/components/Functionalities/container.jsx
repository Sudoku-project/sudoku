import React, { useState } from 'react';

import FunctionalitiesView from './view';

import './style.scss';

const FunctionalitiesContainer = ({ grid, solve, setSudokuGrid, gridDone, gridID, setHasPreviousGames }) => {

  const [gameWon, setGameWon] = useState(false);
  const [message, setMessage] = useState('');
  const [giveUp, setGiveUp] = useState(false);

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

    setGiveUp(true);
  };

  // If user finished the grid,
  const handleGameOver = () => {
    // We solve the grid
    solve(grid);

    // We stringify it for compare it to the played grid
    const solvedGrid = JSON.stringify([...grid]);

    // and get the actual grid from user local storage
    const grids = JSON.parse(localStorage.getItem('grids'));
    const gridToCheck = JSON.stringify(grids[gridID]);

    // faire un composant "gagné" et faire disparaitre ce bouton si c'est gagné
    if(gridToCheck === solvedGrid) {
      console.log('well played');
      setGameWon(true);
      setMessage('');
    
      if(grids.length === 1) {
        localStorage.removeItem('grids');
        setHasPreviousGames(false);
      } else {
        grids.splice(gridID, 1);
        localStorage.setItem('grids', JSON.stringify(grids));
      };
    } else {
      console.log('try again');
      setMessage("🛑 La grille n'est pas correcte 🛑");
    };
  };

  return (
    <FunctionalitiesView
      handleGiveup={handleGiveup}
      handleGameOver={handleGameOver}
      gridDone={gridDone}
      gameWon={gameWon}
      message={message}
      giveUp={giveUp}
    />
  );
};

export default FunctionalitiesContainer;