import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import HomeButton from '../../components/HomeButton';

import trash from '../../media//icons/trash.svg';

import './style.scss';

const Previous = ({ setSudokuGrid, setGridID, setHasPreviousGames }) => {

  const [previousGrids, setPreviousGrids] = useState([]);

  useEffect(() => {
    const previousGames = JSON.parse(localStorage.getItem('grids'));
  
    if(previousGames) {
      const grids = [...previousGames];
      setPreviousGrids(grids);
    };
  }, []);

  const deleteGrid = (gridID) => {

    const grids = [...previousGrids];

    if(grids.length === 1) {
      setHasPreviousGames(false);
      localStorage.removeItem('grids');
    } else {
      grids.splice(gridID, 1);
      localStorage.setItem('grids', JSON.stringify(grids));
      setPreviousGrids(grids);
    };
  };

  return (
    <section className='previous_grids'>

      <HomeButton />

      <div className='previous_grids--container'>

        {previousGrids.map((grid, gridIndex) =>

          <div
            key={gridIndex}
            className='previous_grids--container--item'  
          >
            <NavLink
              to='/game'
              className='previous_grids--container--item--link'
              onClick={() => {
                setSudokuGrid(grid);
                setGridID(gridIndex);
              }}
            >
              <table className='previous_grids--container--item--link--grid'>
                <tbody className='previous_grids--container--item--link--grid--body'>
                  {grid.map((row, rowIndex) =>
                    <tr
                      className='previous_grids--container--item--link--grid--body--row'
                      key={rowIndex}
                    >
                      {row.map((number, columnIndex) =>
                      
                        <td
                          className='previous_grids--container--item--link--grid--body--row--content'
                          key={columnIndex}
                        >
                          {number === 0 ? '' : number}
                        </td>
                      )}
                    </tr>
                  )}
                </tbody>
              </table>
            </NavLink>

            <button
              className='previous_grids--container--item--button'
              onClick={() => {
                deleteGrid(gridIndex);
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
        )}

      </div>
    </section>
  );
};

export default Previous;