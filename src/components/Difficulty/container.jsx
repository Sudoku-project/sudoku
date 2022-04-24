import React from 'react';
import DifficultyView from './view.jsx';


const DifficultyContainer = ({ setDifficulty }) => {

  return (
    <DifficultyView
      setDifficulty={setDifficulty}
    />
  );
};

export default DifficultyContainer;