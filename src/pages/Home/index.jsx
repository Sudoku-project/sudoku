import React, { useContext } from "react";

import { DarkModeContext } from "../../context/DarkModeContext";

import Menu from '../../components/Menu';
import Difficulty from "../../components/Difficulty";

import "./style.scss";

const Home = ({ newGame, difficulty, setDifficulty, hasPreviousGames }) => {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <main className={darkMode ? 'home dark' : 'home'}>

      <Difficulty
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />

      {/* Image pour la page d'accueil ? */}

      <Menu
        newGame={newGame}
        hasPreviousGames={hasPreviousGames}
      />

    </main>
  );
};

export default Home;