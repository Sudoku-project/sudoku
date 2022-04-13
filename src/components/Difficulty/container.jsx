import React from 'react';
import DifficultyView from './view.jsx';


const DifficultyContainer = ({ difficulty, setDifficulty }) => {

  return (
    <DifficultyView
      difficulty={difficulty}
      setDifficulty={setDifficulty}
    />
  );
};

export default DifficultyContainer;