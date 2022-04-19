import React, { useState } from "react";

import Game from "../Game";
import Menu from '../../components/Menu';
import Difficulty from "../../components/Difficulty";

import "./style.scss";

const Home = () => {

  const [difficulty, setDifficulty] = useState(0.4);

  const [showGame, setShowGame] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="home">

      { showMenu && (
        <>
          <Difficulty
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />

          <Menu
            setShowGame={setShowGame}
            setShowMenu={setShowMenu}
          />
        </>
      )}


      { showGame && (
        <Game
          difficulty={difficulty}
          setShowGame={setShowGame}
          setShowMenu={setShowMenu}
        />
      )}

    </div>
  );
};

export default Home;