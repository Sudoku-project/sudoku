import React, { createContext, useState, useEffect } from 'react';

export const LangageContext = createContext();

const LangageContextProvider = (props) => {

  const [lang, setLang] = useState('fr');

  useEffect(() => {
    // The favorite theme is saved in local storage
    const previousLangage = localStorage.getItem('lang');

    // Update the state in terms of previous theme
    if (previousLangage) {
      if(previousLangage === 'en') {
        setLang('en');
        localStorage.setItem('lang', 'en');
      } else {
        setLang('fr');
        localStorage.setItem('lang', 'fr');
      };
    };
  }, []);
  
  const changeLangage = (newLangage) => {
    // When user toggle the theme, in DarkMode component, 
    // we update the state and save it in local storage
    if (newLangage === 'en') {
      setLang('en');
      localStorage.setItem('lang', 'en');
    } else if (newLangage === 'fr') {
      setLang('fr');
      localStorage.setItem('lang', 'fr');
    };
  };

  return (
    <LangageContext.Provider value={{lang, changeLangage}}>
      {props.children}
    </LangageContext.Provider>
  );
};

export default LangageContextProvider;