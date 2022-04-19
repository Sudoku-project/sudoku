import React from 'react';

import Grid from "../../components/Grid";

import './style.scss';

const Game = ({ difficulty }) => {

  return (
    <div className='game'>

      <Grid
        difficulty={difficulty}
      />

    </div>
  );
};

export default Game;