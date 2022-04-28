import React, { useEffect } from 'react';
import DifficultyView from './view.jsx';


const DifficultyContainer = ({ difficulty, setDifficulty }) => {

  useEffect(() => {
    const favoriteDifficulty = localStorage.getItem('difficulty');

    if(favoriteDifficulty) {
      setDifficulty(parseFloat(favoriteDifficulty));
    } else {
      localStorage.setItem('difficulty', 0.4);
      setDifficulty(0.4);
    };
  }, []);

  const handleChangeDifficulty = (newDifficulty) => {

    if(newDifficulty === 'easy') {
      // set state
      setDifficulty(0.55);

      // save in local storage
      localStorage.setItem('difficulty', 0.55);

    } else if(newDifficulty === 'medium') {
      setDifficulty(0.45);
      localStorage.setItem('difficulty', 0.45);

    } else if(newDifficulty === 'hard') {
      setDifficulty(0.35);
      localStorage.setItem('difficulty', 0.35);
    };
  };

  return (
    <DifficultyView
      difficulty={difficulty}
      handleChangeDifficulty={handleChangeDifficulty}
    />
  );
};

export default DifficultyContainer;