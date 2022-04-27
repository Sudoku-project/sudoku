import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import HomeButton from '../../components/HomeButton';

import './style.scss';

const Previous = ({ setSudokuGrid, setGridID }) => {

  const [previousGrids, setPreviousGrids] = useState([]);

  useEffect(() => {
    const previousGames = JSON.parse(localStorage.getItem('grids'));
  
    if(previousGames) {
      const grids = [...previousGames];
      setPreviousGrids(grids);
    };
  }, []);

  return (
    <section className='previous_grids'>

      <HomeButton />

      <div className='previous_grids--container'>

        {previousGrids.map((grid, gridIndex) =>
          <NavLink
            to='/game'
            key={gridIndex}
            onClick={() => {
              setSudokuGrid(grid);
              setGridID(gridIndex);
            }}
          >
            <table className='previous_grids--container--grid'>
              <tbody className='previous_grids--container--grid--body'>
                {grid.map((row, rowIndex) =>
                  <tr
                    className='previous_grids--container--grid--body--row'
                    key={rowIndex}
                  >
                    {row.map((number, columnIndex) =>
                    
                      <td
                        className='previous_grids--container--grid--body--row--content'
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
        )}

      </div>
    </section>
  );
};

export default Previous;