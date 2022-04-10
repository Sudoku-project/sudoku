import React from "react";
import { dataGrid } from "../../utils/dataGrid";

import './style.scss';

const GridView = () => {
  return (
    <table className='grid'>
      <tbody className='grid--body'>
        {dataGrid.map((lines, index) =>
          <tr
            className='grid--body--row'
            key={index}
          >

            {lines.map((number, index) =>

              <td
                className={
                  number === 4 ? 'grid--body--row--content grid--body--row--content--bold' :
                  'grid--body--row--content'}
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

// import React from "react";

// import './style.scss';

// const GridView = ({ rows }) => {
//   return (
//     <table className='grid'>
//       <tbody className='grid--body'>
//         {rows.map((row, index) =>
//           <tr
//             className='grid--body--row'
//             key={index}
//           >

//             {row.map((number, index) =>

//               <td
//                 className='grid--body--row--content'
//                 key={index}
//               >
//                 {number}
//               </td>
//             )}
//           </tr>
//         )}
//       </tbody>
//     </table>
//   );
// };

// export default GridView;