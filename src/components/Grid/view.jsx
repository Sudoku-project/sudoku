import React from "react";

import './style.scss';

const GridView = ({ grid }) => {

  return (
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
                {/* remplacer le '' vide par un input ou une div onClick qui accueil la proposition du joueur */}
                {number === 0 ? '' : number}
              </td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default GridView;