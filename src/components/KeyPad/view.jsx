import React from 'react';

import './style.scss';

const KeyPadView = ({ setNumberInput }) => {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <section className='keypad'>
      <ul className='keypad--numbers'>

        {numbers.map((number, index) => {

          <li
            className='keypad--numbers--item'
            key={index}
          >
            <button
              className='keypad--numbers--item--button'
              onClick={() => {
                setNumberInput(number)
              }}
            >
              {number}
            </button>
          </li>

        })}
      </ul>
    </section>
  );
};

export default KeyPadView;