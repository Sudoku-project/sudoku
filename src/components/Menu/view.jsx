import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

const MenuView = ({ hasPreviousGames }) => {

  return (
    <nav className='menu'>

      <NavLink
        className='menu--link start'
        to='/game'
      >
        Lancer la partie
      </NavLink>


      {hasPreviousGames && (

        <NavLink
          className='menu--link previous'
          to='/list'
        >
          Grilles sauvegardées
        </NavLink>
      )}
    </nav>
  );
};

export default MenuView;