import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';

import './style.scss';

import home from '../../media/icons/home.svg';
import IconButton from '../IconButton';

const HomeButton = () => {

  const { lang } = useContext(LanguageContext);

  return (
    <NavLink
      className='home__button'
      to='/'
    >
      <IconButton
        image={home}
        alt={lang === 'en' ? "Go back to home page" : "Retourner à l'accueil"}
      />
      <span className='home__button--label'>

         {lang === 'en' ? "Home" : "Accueil"}

      </span>
    </NavLink>
  );
};

export default HomeButton;