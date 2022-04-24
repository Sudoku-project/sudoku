import React from 'react';

import './style.scss';

const Previous = ({ previousGrids }) => {

  return (
    <div className='previous'>
      {previousGrids.map((grid, index) => {
        <li>
          grid {index}
        </li>
      })
      }
    </div>
  );
};

export default Previous;