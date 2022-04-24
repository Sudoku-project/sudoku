import React from 'react';
import MenuView from './view';

const MenuContainer = ({ hasPreviousGames }) => {

  return (
    <MenuView
      hasPreviousGames={hasPreviousGames}
    />
  );
};

export default MenuContainer;