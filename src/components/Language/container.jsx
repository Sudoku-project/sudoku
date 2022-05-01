import React, { useContext } from 'react';

import LanguageView from './view';
import { LanguageContext } from '../../context/LanguageContext';

const LanguageContainer = () => {
  
  const { lang, changeLanguage } = useContext(LanguageContext);

  return (
    <LanguageView
      lang={lang}
      changeLanguage={changeLanguage}
    />
  );
};

export default LanguageContainer;