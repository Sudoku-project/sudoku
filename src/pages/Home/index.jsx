import React, { useState } from "react";

import Grid from "../../components/Grid";
import Difficulty from "../../components/Difficulty";

import "./style.scss";

const Home = () => {

  const [difficulty, setDifficulty] = useState(0.3);

  return (
    <div className="home">

      <Grid
        difficulty={difficulty}
      />

      <Difficulty
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />

    </div>
  );
};

export default Home;
