import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';

import IconButton from '../IconButton';

import './style.scss';

import arrow from '../../media/icons/arrow.svg';
import save from '../../media/icons/save.svg';

const MenuView = ({ newGame, hasPreviousGames }) => {

  const { lang } = useContext(LanguageContext);

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
          alt={lang === 'en' ? "Play game" : "Lancer la partie"}
        />
        {lang === 'en' ? "Play" : "Lancer la partie"}
      </NavLink>

      {hasPreviousGames && (

        <NavLink
          className='menu--link previous'
          to='/list'
        >
          <IconButton
            image={save}
            alt={lang === 'en' ? "Saved games" : "Parties sauvegardées"}
          />
          {lang === 'en' ? "Saved grids" : "Grilles sauvegardées"}
        </NavLink>
      )}
    </nav>
  );
};

export default MenuView;