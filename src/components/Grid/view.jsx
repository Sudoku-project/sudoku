import React from "react";
import { dataGrid } from "../../utils/dataGrid";

import './style.scss';

const GridView = () => {
  return (
    <table className='grid'>
      <tbody className='grid--body'>
        {dataGrid.map((line, index) => 
          <tr 
            className='grid--body--row'
            key={index}
          >

            {line.map((number, index) => 
              
              <td 
                className='grid--body--row--content'
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