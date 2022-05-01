import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

const LanguageContextProvider = (props) => {

  const [lang, setLang] = useState('fr');

  useEffect(() => {
    // The favorite theme is saved in local storage
    const previousLanguage = localStorage.getItem('lang');

    // Update the state in terms of previous theme
    if (previousLanguage) {
      if(previousLanguage === 'en') {
        setLang('en');
        localStorage.setItem('lang', 'en');
      } else {
        setLang('fr');
        localStorage.setItem('lang', 'fr');
      };
    } else {
      const favoriteLang = navigator.language;

      if(favoriteLang === 'en') {
        setLang('en');
        localStorage.setItem('lang', 'en');
      } else if(favoriteLang === 'fr') {
        setLang('fr');
        localStorage.setItem('lang', 'fr');
      };
    };
  }, []);
  
  const changeLanguage = (newLanguage) => {
    // When user toggle the theme, in DarkMode component, 
    // we update the state and save it in local storage
    if (newLanguage === 'en') {
      setLang('en');
      localStorage.setItem('lang', 'en');
    } else if (newLanguage === 'fr') {
      setLang('fr');
      localStorage.setItem('lang', 'fr');
    };
  };

  return (
    <LanguageContext.Provider value={{lang, changeLanguage}}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;