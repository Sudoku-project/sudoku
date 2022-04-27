import React from 'react';
import { NavLink } from 'react-router-dom';

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
        <div className='menu--link--img'>
          <img
            src={arrow}
            alt='Lancer la partie'
            className='menu--link--img--icon'
          />
        </div>
        Lancer la partie
      </NavLink>

      {hasPreviousGames && (

        <NavLink
          className='menu--link previous'
          to='/list'
        >
          <div className='menu--link--img'>
            <img
              src={save}
              alt='Parties sauvegardées'
              className='menu--link--img--icon'
            />
          </div>
          Grilles sauvegardées
        </NavLink>
      )}
    </nav>
  );
};

export default MenuView;