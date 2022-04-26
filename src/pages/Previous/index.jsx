import React, { useEffect, useState } from 'react';

import './style.scss';

const Previous = () => {

  const [previousGrids, setPreviousGrids] = useState();

  useEffect(() => {
    // Get previous games from local storage
    const previousGames = JSON.parse(localStorage.getItem('grids'));

    console.log(previousGames);

    // & update the state
    setPreviousGrids(previousGames);
  }, []);

  return (
    <section className='previous_grids'>

      {previousGrids.map((grid, gridIndex) => 

        <table
          className='previous_grids--grid'
          key={gridIndex}
        >
          <tbody className='previous_grids--grid--body'>
            {grid.map((row, rowIndex) => 
              <tr
                className='previous_grids--grid--body--row'
                key={rowIndex}
              >
                {row.map((number, columnIndex) => 
                
                  <td
                    className='previous_grids--grid--body--row--content'
                    key={columnIndex}
                  >
                    {number === 0 ? '' : number}
                  </td>
                )}
              </tr>
            )}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default Previous;