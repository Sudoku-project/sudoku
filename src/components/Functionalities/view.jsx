import React from 'react';

import Victory from '../Victory';
import IconButton from '../IconButton';

import './style.scss';

import cross from '../../media/icons/cross.svg';
import loop from '../../media/icons/loop.svg';

const FunctionalitiesView = ({ 
  handleGiveup,
  handleVerifyGrid,
  message,
  showGiveUpButton,
  showVerifyButton,
  showVictory,
  setShowVictory
}) => {

  return (
    <section className='functionalities'>

      <div className='functionalities--buttons'>
        {showGiveUpButton && (
          <button
            className='functionalities--buttons--button functionalities--buttons--button--solve'
            onClick={()=> {
              handleGiveup();
            }}
          >
            <IconButton
              image={cross}
              alt='Abandonner la partie'
            />
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
            <IconButton
              image={loop}
              alt='Vérifier ma grille'
            />
            Vérifier
          </button>
        )}
      </div>

      <span className='functionalities--message'>
        {message}
      </span>

      {showVictory && (
        <Victory
          setShowVictory={setShowVictory}
        />
      )}
    </section>
  );
};

export default FunctionalitiesView;