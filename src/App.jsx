import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Game from './pages/Game';
import Previous from './pages/Previous';
import NotFound from './pages/NotFound';

import './styles/index.scss';

const App = () => {

  const [difficulty, setDifficulty] = useState();
  const [previousGrids, setPreviousGrids] = useState();
  const [hasPreviousGames, setHasPreviousGames] = useState(false);

  useEffect(() => {
    const previousGames = localStorage.getItem('previousGames');

    if(previousGames) {
      setHasPreviousGames(true);
      setPreviousGrids(previousGames);
    };

  }, []);

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path='/'
          element={
            <Home
              setDifficulty={setDifficulty}
              hasPreviousGames={hasPreviousGames}
            />
          }
        />

        <Route
          path='/game'
          element={
            <Game
              difficulty={difficulty}
              setHasPreviousGames={setHasPreviousGames}
            />
          }
        />

        <Route
          path='/list'
          element={
            <Previous
              previousGrids={previousGrids}
            />
          }
        />

        <Route path="/*" element={ <NotFound /> } />

      </Routes>

    </BrowserRouter>
  );
};

export default App;