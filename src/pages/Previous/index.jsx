import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import HomeButton from '../../components/HomeButton';

import trash from '../../media/icons/trash.svg';

import './style.scss';

const Previous = ({ setSudokuGrid, setGridID, setHasPreviousGames }) => {

  const [previousGrids, setPreviousGrids] = useState([]);

  useEffect(() => {
    const previousGames = JSON.parse(localStorage.getItem('grids'));

    // If there is previous game,
    if(previousGames) {
      // Set them in state
      const grids = [...previousGames];
      setPreviousGrids(grids);
    };
  }, []);

  const deleteGame = (gridID) => {
    // Get grids from state
    const grids = [...previousGrids];

    // If there is only one grid,
    if(grids.length === 1) {
      // we delete direclty item from local storage
      localStorage.removeItem('grids');
      // & update state
      setHasPreviousGames(false);
    } else {
      // If there is many grids, we splice the right one
      grids.splice(gridID, 1);
      // & we reset item in local storage
      localStorage.setItem('grids', JSON.stringify(grids));
      // then, we update state
      setPreviousGrids(grids);
    };
  };

  return (
    <section className='previous_grids'>

      <HomeButton />

      <div className='previous_grids--container'>

        {previousGrids.map((game, gameIndex) => {
          let numberOfZero = 0;

          const merged = [].concat.apply([], game.grid).forEach(number => {
            if(number === 0){
              numberOfZero++;
            };
          });
          const percent = Math.floor(numberOfZero * 100 / 81);
 
          let difficulty;
          let frenchDifficulty;

          if(game.difficulty === 0.5) {
            difficulty = 'easy';
            frenchDifficulty = 'Facile';
          } else if(game.difficulty === 0.4) {
            difficulty = 'medium';
            frenchDifficulty = 'Normal';
          } else if(game.difficulty === 0.3) {
            difficulty = 'hard';
            frenchDifficulty = 'Difficile';
          };

          return(
            <div
              key={gameIndex}
              className='previous_grids--container--item'
            >
              <NavLink
                to='/game'
                className='previous_grids--container--item--link'
                onClick={() => {
                  setSudokuGrid(game.grid);
                  setGridID(gameIndex);
                }}
              >
                <table className={`previous_grids--container--item--link--grid ${difficulty}`}>
                  <tbody className='previous_grids--container--item--link--grid--body'>
                    {game.grid.map((row, rowIndex) => {

                      return (
                        <tr
                          className='previous_grids--container--item--link--grid--body--row'
                          key={rowIndex}
                        >
                          {row.map((number, columnIndex) => {

                            return (
                              <td
                                className='previous_grids--container--item--link--grid--body--row--content'
                                key={columnIndex}
                              >
                                {number === 0 ? '' : number}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                <span className='previous_grids--container--item--link--span'>
                  {frenchDifficulty} - rempli à {100 - percent}%
                </span>
              </NavLink>

              <button
                className='previous_grids--container--item--button'
                onClick={() => {
                  deleteGame(gameIndex);
                }}
              >
                <div className='previous_grids--container--item--button--img'>
                  <img
                    className='previous_grids--container--item--button--img--icon'
                    alt='Supprimer cette grille'
                    src={trash}
                  />
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Previous;