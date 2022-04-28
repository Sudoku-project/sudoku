import React from "react";

import Menu from '../../components/Menu';
import Difficulty from "../../components/Difficulty";

import "./style.scss";

const Home = ({ newGame, difficulty, setDifficulty, hasPreviousGames }) => {

  return (
    <main className="home">

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