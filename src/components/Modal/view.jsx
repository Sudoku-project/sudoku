import React from 'react';

import './style.scss';

const ModalView = ({ children, modalRef, closeModal }) => {
  
  return (
    <section
      className='modal'
      ref={modalRef}
    >
      <div 
        className='behind'
        onClick={() => {
          closeModal();
        }}
      ></div>
      
      <div className='modal--container'>

        <button
          className='modal--container--close'
          onClick={() => {
            closeModal();
          }}
        >

          <span className='modal--container--close--icon'>
            +
          </span>

          <p className='modal--container--close--label'>
            Fermer
          </p>

        </button>

        {children}

      </div>
    </section>
  );
};

export default ModalView;