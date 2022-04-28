import React from 'react';

import './style.scss';

const DifficultyView = ({ handleChangeDifficulty, difficulty }) => {

  return (
    <section className='difficulty'>

      <button
        className={difficulty === 0.95 ? 'difficulty--button easy selected' : 'difficulty--button easy'}
        onClick={() => {
          handleChangeDifficulty('easy');
        }}
      >
        Facile
      </button>

      <button
        className={difficulty === 0.4 ? 'difficulty--button medium selected' : 'difficulty--button medium'}
        onClick={() => {
          handleChangeDifficulty('medium');
        }}
      >
        Normal
      </button>
      <button
        className={difficulty === 0.3 ? 'difficulty--button hard selected' : 'difficulty--button hard'}
        onClick={() => {
          handleChangeDifficulty('hard');
        }}
      >
        Difficile
      </button>

      {/* <input
        className='difficulty--input easy'
        type='radio'
        id='easy'
        name='difficulty'
      />
      <label
        className='difficulty--label'
        htmlFor='easy'
        onClick={() => {
          setDifficulty(0.95);
        }}
      >
        👶🏼 Facile
      </label>

      <input
        className='difficulty--input medium'
        type='radio'
        id='medium'
        name='difficulty'
        defaultChecked='true'
      />
      <label
        className='difficulty--label'
        htmlFor='medium'
        onClick={() => {
          setDifficulty(0.4);
        }}
      >
        👩🏼 Normal
      </label>
      
      <input
        className='difficulty--input hard'
        type='radio'
        id='hard'
        name='difficulty'
      />
      <label
        className='difficulty--label'
        htmlFor='hard'
        onClick={() => {
          setDifficulty(0.3);
        }}
      >
        😈 Difficile
      </label> */}

    </section>
  );
};

export default DifficultyView;