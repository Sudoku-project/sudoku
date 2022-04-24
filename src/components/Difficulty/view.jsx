import React from 'react';

import './style.scss';

const DifficultyView = ({ setDifficulty }) => {

  return (
    <section className='difficulty'>

      <input
        className='difficulty--input easy'
        type='radio'
        id='easy'
        name='difficulty'
      />
      <label
        className='difficulty--label'
        htmlFor='easy'
        onClick={() => {
          setDifficulty(0.5);
        }}
      >
        Facile
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
        Normal
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
        Difficile
      </label>

    </section>
  );
};

export default DifficultyView;