import React from 'react';

import './style.scss';

const MenuView = ({ setShowGame, setShowMenu }) => {

  const startGame = () => {
    setShowMenu(false);
    setShowGame(true);
  };

  return (
    <div className='menu'>
      {/* Comment random la grid à partir d'ici ??? */}

      <button
        className='menu--start'
        onClick={() => {
          startGame();
        }}
      >
        Lancer la partie
      </button>
    </div>
  );
};

export default MenuView;