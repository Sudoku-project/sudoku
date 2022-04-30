import React from 'react';
import { NavLink } from 'react-router-dom';

import IconButton from '../IconButton';

import './style.scss';

import arrow from '../../media/icons/arrow.svg';
import save from '../../media/icons/save.svg';

const MenuView = ({ newGame, hasPreviousGames }) => {

  return (
    <nav className='menu'>

      <NavLink
        className='menu--link start'
        to='/game'
        onClick={() => {
          newGame();
        }}
      >
        <IconButton
          image={arrow}
          alt='Lancer la partie'
        />
        Lancer la partie
      </NavLink>

      {hasPreviousGames && (

        <NavLink
          className='menu--link previous'
          to='/list'
        >
          <IconButton
            image={save}
            alt='Parties sauvegardées'
          />
          Grilles sauvegardées
        </NavLink>
      )}
    </nav>
  );
};

export default MenuView;