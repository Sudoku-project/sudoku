import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

import home from '../../media/icons/home.svg';
import IconButton from '../IconButton';

const HomeButton = () => {

  return (
    <NavLink
      className='home__button'
      to='/'
    >
      <IconButton
        image={home}
        alt="Retourner à l'accueil"
      />
      <span className='home__button--label'>
        Accueil
      </span>
    </NavLink>
  );
};

export default HomeButton;