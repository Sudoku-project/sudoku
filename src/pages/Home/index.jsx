import React from "react";

import Menu from '../../components/Menu';
import Difficulty from "../../components/Difficulty";

import "./style.scss";

const Home = ({ difficulty, setDifficulty }) => {

  return (
    <div className="home">

      <Difficulty
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />

      {/* Image pour la page d'accueil ? */}

      <Menu

      />
      

    </div>
  );
};

export default Home;