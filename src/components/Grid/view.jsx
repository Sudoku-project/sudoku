import React from "react";

import Functionalities from "../Functionalities";
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
                  className='grid--body--row--content'
                  key={index}
                >
                  {/* remplacer le '' vide par un input ou une div onClick qui accueille la proposition du joueur */}
                  {number === 0 ? '' : number}
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