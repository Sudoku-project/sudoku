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
      setDifficulty(0.95);

      // save in local storage
      localStorage.setItem('difficulty', 0.95);

    } else if(newDifficulty === 'medium') {
      setDifficulty(0.4);
      localStorage.setItem('difficulty', 0.4);

    } else if(newDifficulty === 'hard') {
      setDifficulty(0.3);
      localStorage.setItem('difficulty', 0.3);
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