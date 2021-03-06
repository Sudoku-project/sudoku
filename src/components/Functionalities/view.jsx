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
  setShowVictory,
  lang
}) => {

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
            <IconButton
              image={cross}
              alt={lang === 'en' ? "Give up" : "Abandonner la partie"}
            />
            <span className='functionalities--buttons--button--label'>
              Solution
            </span>
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
              alt={lang === 'en' ? "Verify grid" : "Vérifier ma grille"}
            />
            <span className='functionalities--buttons--button--label'>
              {lang === 'en' ? "Verify" : "Vérifier"}
            </span>
          </button>
        )}
      </div>

      {showVictory && (
        <Victory
          setShowVictory={setShowVictory}
        />
      )}
    </section>
  );
};

export default FunctionalitiesView;