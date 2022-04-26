import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Game from './pages/Game';
import Previous from './pages/Previous';
import NotFound from './pages/NotFound';

import './styles/index.scss';

const App = () => {

  const [difficulty, setDifficulty] = useState(0.4);
  const [previousGrids, setPreviousGrids] = useState();
  const [hasPreviousGames, setHasPreviousGames] = useState(false);

  useEffect(() => {
    const previousGames = localStorage.getItem('grids');

    if(previousGames) {
      setHasPreviousGames(true);
      const parsedGames = JSON.parse(previousGames);
      setPreviousGrids(parsedGames);
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
              hasPreviousGames={hasPreviousGames}
              setHasPreviousGames={setHasPreviousGames}
            />
          }
        />

{/* rendre la route accessible que si il y a des previousGames */}
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