import React, { useContext } from 'react';

import { DarkModeContext } from '../../context/DarkModeContext';

import './style.scss';

import uk from '../../media/flags/uk.svg';
import france from '../../media/flags/france.svg';

const LanguageView = ({ lang, changeLanguage }) => {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <section className={darkMode ? 'lang dark' : 'lang'}>

      <button
        className='lang--button'
        onClick={() => {
          changeLanguage('en');
        }}
      >
        <div className='lang--button--icon'>
          <img
            className='lang--button--icon--img'
            alt={lang === 'en' ? "United Kingdom's flag" : "Drapeau anglais"}
            src={uk}
          />
        </div>
      </button>
      
      <button
        className='lang--button'
        onClick={() => {
          changeLanguage('fr');
        }}
      >
        <div className='lang--button--icon'>
          <img
            className='lang--button--icon--img'
            alt={lang === 'en' ? "French's flag" : "Drapeau français"}
            src={france}
          />
        </div>
      </button>

    </section>
  );
};

export default LanguageView;