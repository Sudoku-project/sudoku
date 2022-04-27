import React from 'react';

import './style.scss';

import cross from '../../media/icons/cross.svg';
import loop from '../../media/icons/loop.svg';

const FunctionalitiesView = ({ handleGiveup, handleGameOver, gridDone, gameWon, message, giveUp }) => {

  return (
    <section className='functionalities'>

      <span className='functionalities--message'>
        {message}
      </span>

      <div className='functionalities--buttons'>
        {!giveUp && (
          <>
            {!gameWon && (
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
            {gridDone && !gameWon && (
              <button
                className='functionalities--buttons--button functionalities--buttons--button--verify'
                onClick={() => {
                  handleGameOver();
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
          </>
        )}
      </div>
    </section>
  );
};

export default FunctionalitiesView;