import React from 'react';

import './style.scss';

import cross from '../../media/icons/cross.svg';
import loop from '../../media/icons/loop.svg';

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
          <div className='functionalities--button--img'>
            <img
              src={cross}
              alt="Abandonner"
              className='functionalities--button--img--icon'
            />
          </div>
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
          <div className='functionalities--button--img'>
            <img
              src={loop}
              alt="Vérifier ma grille"
              className='functionalities--button--img--icon'
            />
          </div>
          Vérifier
        </button>
      )}
    </section>
  );
};

export default FunctionalitiesView;