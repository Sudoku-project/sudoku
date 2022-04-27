import React from "react";

import "./style.scss";

const KeyPadView = ({ handleChangeNumber, keyPadRef }) => {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <section
      ref={keyPadRef}
      className="keypad"
    >
      <ul className="keypad--numbers">
        {numbers.map((number, index) => (
          <li className="keypad--numbers--item" key={index}>
            <button
              className="keypad--numbers--item--button"
              onClick={() => {
                handleChangeNumber(number);
              }}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default KeyPadView;
