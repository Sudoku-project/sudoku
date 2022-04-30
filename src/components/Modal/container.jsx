import React, { useRef } from 'react';

import ModalView from './view';

const ModalContainer = (props) => {

  const modalRef= useRef(null);

  const closeModal = () => {
    modalRef.current.style.opacity = '0';

    setTimeout(() => {
      props.setShowModal(false);
    }, 300);
  };

  return (
    <ModalView
      props={props}
      modalRef={modalRef}
      closeModal={closeModal}
    />
  );
};

export default ModalContainer;