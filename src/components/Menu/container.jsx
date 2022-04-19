import React from 'react';
import MenuView from './view';

const MenuContainer = ({ setShowGame, setShowMenu }) => {

  return (
    <MenuView
      setShowGame={setShowGame}
      setShowMenu={setShowMenu}
    />
  );
};

export default MenuContainer;