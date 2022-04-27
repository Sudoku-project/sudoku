import React from 'react';

import Grid from "../../components/Grid";
import HomeButton from '../../components/HomeButton';

import './style.scss';

const Game = ({ difficulty, hasPreviousGames, setHasPreviousGames }) => {

  return (
    <div className='game'>
      
      <HomeButton />

      <Grid
        difficulty={difficulty}
        hasPreviousGames={hasPreviousGames}
        setHasPreviousGames={setHasPreviousGames}
      />

    </div>
  );
};

export default Game;