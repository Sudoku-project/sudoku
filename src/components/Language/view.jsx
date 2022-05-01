import React from 'react';

import IconButton from '../IconButton';

import './style.scss';

import uk from '../../media/flags/uk.svg';
import france from '../../media/flags/france.svg';

const LanguageView = ({ lang, changeLanguage }) => {

  return (
    <section className='lang'>

      <button
        className='lang--button'
        onClick={() => {
          changeLanguage('en');
        }}
      >
        <IconButton
          image={uk}
          alt={lang === 'en' ? "United Kingdom's flag" : "Drapeau anglais"}
        />
      </button>
      
      <button
        className='lang--button'
        onClick={() => {
          changeLanguage('fr');
        }}
      >
        <IconButton
          image={france}
          alt={lang === 'en' ? "French's flag" : "Drapeau français"}
        />
      </button>

    </section>
  );
};

export default LanguageView;