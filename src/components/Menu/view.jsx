import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

const MenuView = () => {

  return (
    <nav className='menu'>

      <NavLink
        className='menu--start'
        to='/game'
      >
        Lancer la partie
      </NavLink>

    </nav>
  );
};

export default MenuView;