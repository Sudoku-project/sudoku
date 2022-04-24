import React from 'react';
import { NavLink } from 'react-router-dom';

import Grid from "../../components/Grid";

import './style.scss';

const Game = ({ difficulty, setHasPreviousGames }) => {

  const saveGame = () => {
    const actualGame = JSON.parse(localStorage.getItem('grid'));
    const previousGame = JSON.parse(localStorage.getItem('previousGames'));

    if(previousGame) {

      let gamesToSave = [...previousGame];
      gamesToSave.push(actualGame);
      localStorage.setItem('previousGames', JSON.stringify(gamesToSave));
      setHasPreviousGames(true);

    } else {

      let gamesToSave = [];
      gamesToSave.push(actualGame);
      localStorage.setItem('previousGames', JSON.stringify(gamesToSave));
      setHasPreviousGames(true);
    };
  };

  return (
    <div className='game'>
      <NavLink
        className='game--link'
        to='/'
        onClick={() => {
          saveGame();
        }}
      >
        Accueil
      </NavLink>

      <Grid
        difficulty={difficulty}
      />

    </div>
  );
};

export default Game;