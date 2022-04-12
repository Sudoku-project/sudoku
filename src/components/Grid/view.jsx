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
                className=
                'grid--body--row--content'
                // {
                //   number === 1 ? 'grid--body--row--content red' : 'grid--body--row--content'
                // }
                key={index}
              >
                {number}
              </td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default GridView;