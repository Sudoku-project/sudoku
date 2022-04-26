import React from 'react';
import { NavLink } from 'react-router-dom';

import Grid from "../../components/Grid";

import './style.scss';

import home from '../../media/icons/home.svg';

const Game = ({ difficulty, hasPreviousGames, setHasPreviousGames }) => {

  return (
    <div className='game'>
      <NavLink
        className='game--link'
        to='/'
      >
        <div className='game--link--img'>
          <img
            src={home}
            alt="Revenir à l'accueil"
            className='game--link--img--icon'
          />
        </div>
        Accueil
      </NavLink>

      <Grid
        difficulty={difficulty}
        hasPreviousGames={hasPreviousGames}
        setHasPreviousGames={setHasPreviousGames}
      />

    </div>
  );
};

export default Game;