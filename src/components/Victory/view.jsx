import React from 'react';

import Modal from '../Modal';
import HomeButton from '../HomeButton';

import './style.scss';

const VictoryView = ({ setShowVictory }) => {

  return (
    <section className='victory'>
      <Modal
        setShowModal={setShowVictory}
      >
        <p className='victory--content'>
          Vous avez gagné !
        </p>
        
        <HomeButton />
      </Modal>
    </section>
  );
};

export default VictoryView;