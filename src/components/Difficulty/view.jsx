import React, { useRef } from 'react';

import './style.scss';

const DifficultyView = ({ difficulty, setDifficulty }) => {

  const easyRef = useRef(null);
  const mediumRef = useRef(null);
  const hardRef = useRef(null);

  const changeDifficulty = (newDifficulty) => {
    if (newDifficulty === 'easy') {
      setDifficulty(0.2);
      easyRef.current.style.background = 'green';
      mediumRef.current.style.background = '#3498db';
      hardRef.current.style.background = '#3498db';

    } else if (newDifficulty === 'medium') {
      setDifficulty(0.3);
      easyRef.current.style.background = '#3498db';
      mediumRef.current.style.background = 'orange';
      hardRef.current.style.background = '#3498db';
      
    } else if (newDifficulty === 'hard') {
      setDifficulty(0.4);
      easyRef.current.style.background = '#3498db';
      mediumRef.current.style.background = '#3498db';
      hardRef.current.style.background = 'red';
    };
  };

  return (
    <section className='difficulty'>

      <input
        className='difficulty--input'
        type='radio'
        id='easy'
        name='difficulty'
      />
      <label
        className='difficulty--label'
        htmlFor='easy'
        ref={easyRef}
        onClick={() => {
          changeDifficulty('easy');
        }}
      >
        Facile
      </label>

      <input
        className='difficulty--input'
        type='radio'
        id='medium'
        name='difficulty'
        defaultChecked='true'
      />
      <label
        className='difficulty--label'
        htmlFor='medium'
        ref={mediumRef}
        onClick={() => {
          changeDifficulty('medium');
        }}
      >
        Medium
      </label>
      
      <input
        className='difficulty--input'
        type='radio'
        id='hard'
        name='difficulty'
      />
      <label
        className='difficulty--label'
        htmlFor='hard'
        ref={hardRef}
        onClick={() => {
          changeDifficulty('hard');
        }}
      >
        Difficile
      </label>

    </section>
  );
};

export default DifficultyView;