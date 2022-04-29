import React, { useEffect, useState } from 'react';

import FunctionalitiesView from './view';

import './style.scss';

const FunctionalitiesContainer = ({ grid, solve, setSudokuGrid, gridDone, gridID, setHasPreviousGames }) => {

  const [message, setMessage] = useState('');
  const [showGiveUpButton, setShowGiveUpButton] = useState(true);
  const [showVerifyButton, setShowVerifyButton] = useState(false);

  useEffect(() => {
    if(gridDone === true) {
      setShowVerifyButton(true);
    };
  }, [gridDone]);

  // If user give up,
  const handleGiveup = () => {
    setMessage('');
    
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

    setShowVerifyButton(false);
    setShowGiveUpButton(false);
  };

  // If user finished the grid,
  const handleVerifyGrid = () => {
    setMessage('');

    // We solve the grid
    solve(grid);

    // We stringify it for compare it to the played grid
    const solvedGrid = JSON.stringify([...grid]);

    // and get the actual grid from user local storage
    const grids = JSON.parse(localStorage.getItem('grids'));
    const gridToCheck = JSON.stringify(grids[gridID].grid);

    console.log(solvedGrid);
    console.log(gridToCheck);

    // faire un composant "gagné" et faire disparaitre ce bouton si c'est gagné
    if(gridToCheck === solvedGrid) {



      console.log('well played');
      


      setShowGiveUpButton(false);
      setShowVerifyButton(false);
    
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
      handleVerifyGrid={handleVerifyGrid}
      message={message}
      showGiveUpButton={showGiveUpButton}
      showVerifyButton={showVerifyButton}
    />
  );
};

export default FunctionalitiesContainer;