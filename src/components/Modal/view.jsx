import React from 'react';

import './style.scss';

const ModalView = (props) => {
  
  return (
    <section
      className='modal'
      ref={props.modalRef}
    >
      <div 
        className='behind'
        onClick={() => {
          props.closeModal();
        }}
      ></div>
      
      <div className='modal--container'>

        <button
          className='modal--container--close'
          onClick={() => {
            props.closeModal();
          }}
        >

          <span className='modal--container--close--icon'>
            +
          </span>

          <p className='modal--container--close--label'>
            Fermer
          </p>

        </button>

        {props.children}

      </div>
    </section>
  );
};

export default ModalView;