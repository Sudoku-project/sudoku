import React from "react";
import GridView from "./view.jsx";

const GridContainer = ({ sudokuGrid, setSudokuGrid, gridID, solve, setHasPreviousGames }) => {

  return (
    <GridView
      grid={sudokuGrid}
      setSudokuGrid={setSudokuGrid}
      gridID={gridID}
      solve={solve}
      setHasPreviousGames={setHasPreviousGames}
    />
  );
};

export default GridContainer;