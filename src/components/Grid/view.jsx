import React, { useContext, useState } from 'react';

import { DarkModeContext } from '../../context/DarkModeContext';

import Box from '../Box';
import Functionalities from '../Functionalities';

import './style.scss';

const GridView = ({
  grid,
  solve,
  setSudokuGrid,
  gridID,
  setHasPreviousGames
}) => {
  
  const { darkMode } = useContext(DarkModeContext);

  const [gridDone, setGridDone] = useState(false);

  return (
    <>
      <table className={darkMode ? 'grid dark' : 'grid'}>
        <tbody className="grid--body">
          {grid.map((row, rowIndex) => {

            return (
              <tr 
                className="grid--body--row" 
                key={rowIndex}
              >
                {row.map((number, columnIndex) => {
                  return (
                    <td
                      key={columnIndex}
                      className={
                        number === 0
                          ? "grid--body--row--content empty"
                          : "grid--body--row--content full"
                      }
                    >
                      {number === 0 ? (
                        <Box
                          number={number}
                          row={rowIndex}
                          column={columnIndex}
                          setGridDone={setGridDone}
                          gridID={gridID}
                        />
                      ) : (
                        number
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <Functionalities
        grid={grid}
        solve={solve}
        setSudokuGrid={setSudokuGrid}
        gridDone={gridDone}
        gridID={gridID}
        setHasPreviousGames={setHasPreviousGames}
      />
    </>
  );
};

export default GridView;
