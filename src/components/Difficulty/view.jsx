import React from 'react';

import './style.scss';

const DifficultyView = ({ handleChangeDifficulty, difficulty }) => {

  return (
    <section className='difficulty'>

      <button
        className={difficulty === 0.55 ? 'difficulty--button easy selected' : 'difficulty--button easy'}
        onClick={() => {
          handleChangeDifficulty('easy');
        }}
      >
        Facile
      </button>

      <button
        className={difficulty === 0.45 ? 'difficulty--button medium selected' : 'difficulty--button medium'}
        onClick={() => {
          handleChangeDifficulty('medium');
        }}
      >
        Normal
      </button>
      <button
        className={difficulty === 0.35 ? 'difficulty--button hard selected' : 'difficulty--button hard'}
        onClick={() => {
          handleChangeDifficulty('hard');
        }}
      >
        Difficile
      </button>
      
    </section>
  );
};

export default DifficultyView;