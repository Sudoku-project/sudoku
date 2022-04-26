import React, { useState } from "react";

import Box from '../Box';
import KeyPad from '../KeyPad';
import Functionalities from "../Functionalities";

import './style.scss';

const GridView = ({ grid, solve, setSudokuGrid, gridID, setHasPreviousGames }) => {

  const [gridDone, setGridDone] = useState(false);
  const [inputFocused, setInputFocused] = useState(null);

  const [numberInput, setNumberInput] = useState(0);

  return (
    <>
      <table className='grid'>
        <tbody className='grid--body'>
          {grid.map((row, rowIndex) =>

            <tr
              className='grid--body--row'
              key={rowIndex}
            >
              {row.map((number, columnIndex) => {

                let newNumber = number;

                return (

                <td
                  className={number === 0 ? 'grid--body--row--content empty' : 'grid--body--row--content full'}
                  key={columnIndex}
                >
                  {number === 0 ?
                    <Box
                      number={newNumber}
                      row={rowIndex}
                      column={columnIndex}
                      setGridDone={setGridDone}
                      gridID={gridID}
                      setInputFocused={setInputFocused}
                      numberInput={numberInput}
                      setNumberInput={setNumberInput}
                    />
                  :
                    number
                  }
                </td>

                );
              }
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
        setHasPreviousGames={setHasPreviousGames}
      />

      <KeyPad
        inputFocused={inputFocused}
        setInputFocused={setInputFocused}
        setSudokuGrid={setSudokuGrid}
        setNumberInput={setNumberInput}
      />
    </>
  );
};

export default GridView;