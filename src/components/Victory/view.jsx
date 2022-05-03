import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

import Modal from '../Modal';
import HomeButton from '../HomeButton';

import './style.scss';

const VictoryView = ({ setShowVictory }) => {

  const { lang } = useContext(LanguageContext);

  return (
    <section className='victory'>
      <div className="pyro">
        <div className="before"></div>
        <div className="after"></div>
      </div>
      <Modal
        setShowModal={setShowVictory}
      >
        <p className='victory--content'>

          {lang === 'en' ?
          
            "YOU WON !"
          :
            "VOUS AVEZ GAGNÉ !"
          }

        </p>
        
        <HomeButton />
      </Modal>
    </section>
  );
};

export default VictoryView;