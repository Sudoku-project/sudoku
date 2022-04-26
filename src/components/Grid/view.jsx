import React, { useState } from "react";

import Functionalities from "../Functionalities";
import Box from '../Box';

import './style.scss';

const GridView = ({ grid, solve, setSudokuGrid, gridID }) => {

  const [gridDone, setGridDone] = useState(false);

  return (
    <>
      <table className='grid'>
        <tbody className='grid--body'>
          {grid.map((row, rowIndex) =>

            <tr
              className='grid--body--row'
              key={rowIndex}
            >
              {row.map((number, columnIndex) =>

                <td
                  className={number === 0 ? 'grid--body--row--content empty' : 'grid--body--row--content full'}
                  key={columnIndex}
                >
                  {number === 0 ?
                    <Box
                      number={number}
                      grid={grid}
                      row={rowIndex}
                      column={columnIndex}
                      setGridDone={setGridDone}
                      gridID={gridID}
                    />
                  :
                    number
                  }
                </td>
              )}
            </tr>
          )}
        </tbody>
      </table>

      <Functionalities
        grid={grid}
        solve={solve}
        setSudokuGrid={setSudokuGrid}
        gridDone={gridDone}
        gridID={gridID}
      />
    </>
  );
};

export default GridView;