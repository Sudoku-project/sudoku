import React, { useState, useEffect } from "react";

import Menu from '../../components/Menu';
import Difficulty from "../../components/Difficulty";

import "./style.scss";

const Home = ({ setDifficulty, hasPreviousGames }) => {

  return (
    <main className="home">

      <Difficulty
        setDifficulty={setDifficulty}
      />

      {/* Image pour la page d'accueil ? */}

      <Menu
        hasPreviousGames={hasPreviousGames}
      />
      

    </main>
  );
};

export default Home;