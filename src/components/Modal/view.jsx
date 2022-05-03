import React, { useContext } from 'react';

import { DarkModeContext } from '../../context/DarkModeContext';

import './style.scss';

const ModalView = ({ children, modalRef, closeModal }) => {

  const { darkMode } = useContext(DarkModeContext);
  
  return (
    <section
      className={darkMode ? 'modal dark' : 'modal'}
      ref={modalRef}
    >
      <div 
        className='behind'
        onClick={() => {
          closeModal();
        }}
      ></div>
      
      <div className='modal--wrapper'>

        <section className='modal--wrapper--container'>

          <button
            className='modal--wrapper--container--close'
            onClick={() => {
              closeModal();
            }}
          >

            <span className='modal--wrapper--container--close--icon'>
              +
            </span>

          </button>

          {children}

        </section>

      </div>
    </section>
  );
};

export default ModalView;