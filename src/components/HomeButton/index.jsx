import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

import home from '../../media/icons/home.svg';

const HomeButton = () => {

  return (
    <NavLink
      className='home__button'
      to='/'
    >
      <div className='home__button--img'>
        <img
          src={home}
          alt="Revenir à l'accueil"
          className='home__button--img--icon'
        />
      </div>
      Accueil
    </NavLink>
  );
};

export default HomeButton;