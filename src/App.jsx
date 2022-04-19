import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Game from './pages/Game';
import NotFound from './pages/NotFound';

import './styles/index.scss';

const App = () => {

  const [difficulty, setDifficulty] = useState(0.4);

  return (
    <BrowserRouter>
        
      <Routes>

        <Route
          path='/'
          element={
            <Home
              difficulty={difficulty}
              setDifficulty={setDifficulty}
            />
          }
        />

        <Route
          path='/game'
          element={
            <Game
              difficulty={difficulty}
            />
          }
        />

        <Route path="/*" element={ <NotFound /> } />

      </Routes>

    </BrowserRouter>
  );
}

export default App;