import React from 'react';

import './style.scss';

import cross from '../../media/icons/cross.svg';
import loop from '../../media/icons/loop.svg';

const FunctionalitiesView = ({ handleGiveup, handleVerifyGrid, message, showGiveUpButton, showVerifyButton }) => {

  return (
    <section className='functionalities'>

      <span className='functionalities--message'>
        {message}
      </span>

      <div className='functionalities--buttons'>
        {showGiveUpButton && (
          <button
            className='functionalities--buttons--button functionalities--buttons--button--solve'
            onClick={()=> {
              handleGiveup();
            }}
          >
            <div className='functionalities--buttons--button--img'>
              <img
                src={cross}
                alt="Abandonner"
                className='functionalities--buttons--button--img--icon'
              />
            </div>
            Solution
          </button>
        )}
        {showVerifyButton && (
          <button
            className='functionalities--buttons--button functionalities--buttons--button--verify'
            onClick={() => {
              handleVerifyGrid();
            }}
          >
            <div className='functionalities--buttons--button--img'>
              <img
                src={loop}
                alt="Vérifier ma grille"
                className='functionalities--buttons--button--img--icon'
              />
            </div>
            Vérifier
          </button>
        )}
      </div>
    </section>
  );
};

export default FunctionalitiesView;