import React from "react";

import Functionalities from "../Functionalities";
import Box from '../Box';

import './style.scss';

const GridView = ({ grid, solveGrid, setSudokuGrid }) => {

  return (
    <>
      <table className='grid'>
        <tbody className='grid--body'>
          {grid.map((row, index) =>
            <tr
              className='grid--body--row'
              key={index}
            >

              {row.map((number, index) =>

                <td
                  className={number === 0 ? 'grid--body--row--content empty' : 'grid--body--row--content full'}
                  key={index}
                >
                  {number === 0 ? <Box /> : number}
                </td>
              )}
            </tr>
          )}
        </tbody>
      </table>

      <Functionalities
        grid={grid}
        solveGrid={solveGrid}
        setSudokuGrid={setSudokuGrid}
      />
    </>
  );
};

export default GridView;