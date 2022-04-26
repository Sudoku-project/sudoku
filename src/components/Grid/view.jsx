import React, { useState } from "react";

import Box from "../Box";
import KeyPad from "../KeyPad";
import Functionalities from "../Functionalities";

import "./style.scss";

const GridView = ({
  grid,
  solve,
  setSudokuGrid,
  gridID,
  setHasPreviousGames,
}) => {
  const [gridDone, setGridDone] = useState(false);
  const [rowId, setRowId] = useState(false);
  const [columnId, setColumnId] = useState(false);

  return (
    <>
      <table className="grid">
        <tbody className="grid--body">
          {grid.map((row, rowIndex) => (
            <tr className="grid--body--row" key={rowIndex}>
              {row.map((number, columnIndex) => {
                return (
                  <td
                    className={
                      number === 0
                        ? "grid--body--row--content empty"
                        : "grid--body--row--content full"
                    }
                    key={columnIndex}
                  >
                    {number === 0 ? (
                      <Box
                        setRowId={setRowId}
                        setColumnId={setColumnId}
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
          ))}
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
        setSudokuGrid={setSudokuGrid}
        rowId={rowId}
        columnId={columnId}
        gridID={gridID}
        setGridDone={setGridDone}
      />
    </>
  );
};

export default GridView;
