import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

import './style.scss';

const DifficultyView = ({ handleChangeDifficulty, difficulty }) => {

  const { lang } = useContext(LanguageContext);

  return (
    <section className='difficulty'>

      <button
        className={difficulty === 0.55 ? 'difficulty--button easy selected' : 'difficulty--button easy'}
        onClick={() => {
          handleChangeDifficulty('easy');
        }}
      >
        {lang === 'en' ? "Easy" : "Facile"}
      </button>

      <button
        className={difficulty === 0.45 ? 'difficulty--button medium selected' : 'difficulty--button medium'}
        onClick={() => {
          handleChangeDifficulty('medium');
        }}
      >
        {lang === 'en' ? "Medium" : "Normal"}
      </button>
      <button
        className={difficulty === 0.35 ? 'difficulty--button hard selected' : 'difficulty--button hard'}
        onClick={() => {
          handleChangeDifficulty('hard');
        }}
      >
        {lang === 'en' ? "Hard" : "Difficile"}
      </button>
      
    </section>
  );
};

export default DifficultyView;