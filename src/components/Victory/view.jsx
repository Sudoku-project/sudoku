import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

import Modal from '../Modal';
import HomeButton from '../HomeButton';

import './style.scss';

const VictoryView = ({ setShowVictory }) => {

  const { lang } = useContext(LanguageContext);

  return (
    <section className='victory'>
      <Modal
        setShowModal={setShowVictory}
      >
        <p className='victory--content'>

          {lang === 'en' ?
          
            "You won !"
          :
            "Vous avez gagné la partie !"
          }

        </p>
        
        <HomeButton />
      </Modal>
    </section>
  );
};

export default VictoryView;