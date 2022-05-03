import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import { DarkModeContext } from '../../context/DarkModeContext';

import IconButton from '../../components/IconButton';

import './style.scss';

import home from '../../media/icons/home.svg';

const NotFound = () => {

  const { lang } = useContext(LanguageContext);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'not_found dark' : 'not_found'}>

      <p className='not_found--text'>
        Cette page n'existe pas
      </p>

      <NavLink
        className='not_found--button'
        to='/'
      >
        <IconButton
          image={home}
          alt={lang === 'en' ? "Go back to home page" : "Revenir à l'accueil"}
        />
        { lang === 'en' ? 'Home' : 'Accueil'}
      </NavLink>
    </div>
  );
};

export default NotFound;