import React, { useContext } from "react";

import { DarkModeContext } from '../../context/DarkModeContext';
import { LanguageContext } from "../../context/LanguageContext";

import "./style.scss";

const KeyPadView = ({ handleChangeNumber, keyPadRef }) => {

  const { darkMode } = useContext(DarkModeContext);
  const { lang } = useContext(LanguageContext);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <section
      ref={keyPadRef}
      className={darkMode ? 'keypad dark' : 'keypad'}
    >
      <ul className="keypad--numbers">
        {numbers.map((number, index) =>
          <li
            className="keypad--numbers--item"
            key={index}
          >
            <button
              className="keypad--numbers--item--button"
              onClick={() => {
                handleChangeNumber(number);
              }}
            >
              {number}
            </button>
          </li>
        )}
        <button
          className='keypad--numbers--clear'
          onClick={() => {
            handleChangeNumber(0);
          }}
        >
          {lang === 'en' ? "Clear" : "Effacer"}
        </button>
      </ul>
    </section>
  );
};

export default KeyPadView;
