import React from 'react';
import MenuView from './view';

const MenuContainer = ({ newGame, hasPreviousGames }) => {

  return (
    <MenuView
      newGame={newGame}
      hasPreviousGames={hasPreviousGames}
    />
  );
};

export default MenuContainer;