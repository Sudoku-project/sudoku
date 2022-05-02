import React, { useContext } from 'react';

import { DarkModeContext } from '../../context/DarkModeContext';
import { LanguageContext } from '../../context/LanguageContext';

import './style.scss';

import light from '../../media/theme/light.svg';
import dark from '../../media/theme/dark.svg';

const DarkModeView = () => {

  const { darkMode, toggleTheme } = useContext(DarkModeContext);
  const { lang } = useContext(LanguageContext);

  return (
    <section className='theme'>
      <button
        className={darkMode ? 'theme--button dark' : 'theme--button'}
        onClick={() => {
          toggleTheme();
        }}
      >
        <div className='theme--button--icon'>
          <img
            src={darkMode ? light : dark}
            alt={lang === 'en' ? "Change theme" : "Changer le thème"}
            className='theme--button--icon--img'
          />
        </div>

      </button>

    </section>
  );
};

export default DarkModeView;