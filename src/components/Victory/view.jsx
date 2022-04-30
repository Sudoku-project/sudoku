import React from 'react';
import { NavLink } from 'react-router-dom';

import Modal from '../Modal';
import IconButton from '../IconButton';

import './style.scss';

import home from '../../media/icons/home.svg';

const VictoryView = ({ setShowVictory }) => {

  return (
    <section className='victory'>
      <Modal
        setShowModal={setShowVictory}
      >
        <p className='victory--content'>
          Vous avez gagné !
        </p>

        <NavLink
          to='/'
          className='victory--link'
        >
          <IconButton
            image={home}
            alt={"Retourner à la page d'accueil"}
          />
          
          Accueil
        </NavLink>
      </Modal>
    </section>
  );
};

export default VictoryView;