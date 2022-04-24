import React from 'react';

import './style.scss';

const FunctionalitiesView = ({ handleGiveup, handleGameOver, gridDone }) => {

  return (
    <section className='functionalities'>
      {!gridDone && (
        <button
          className='functionalities--button functionalities--button--solve'
          onClick={()=> {
            handleGiveup();
          }}
        >
          Solution
        </button>
      )}
      {gridDone && (
        <button
          className='functionalities--button functionalities--button--verify'
          onClick={() => {
            handleGameOver();
          }}
        >
          Vérifier
        </button>
      )}
    </section>
  );
};

export default FunctionalitiesView;