import React, { createContext, useState, useEffect } from 'react';

export const DarkMode = createContext();

const DarkModeProvider = (props) => {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // The favorite theme is saved in local storage
    const previousTheme = localStorage.getItem('dark_mode');

    // Update the state in terms of previous theme
    if (previousTheme) {
      if(previousTheme) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      };
    } else {
      localStorage.setItem('dark_mode', false);
    };
  }, []);
  
  const toggleTheme = () => {
    // When user toggle the theme, in DarkMode component, 
    // we update the state
    setDarkMode(!darkMode);
    
    // and save it in local storage
    if (darkMode) {
      localStorage.setItem('dark_mode', true);
    } else {
      localStorage.setItem('dark_mode', false);
    };
  };

  return (
    <DarkMode.Provider value={{darkMode, toggleTheme}}>
      {props.children}
    </DarkMode.Provider>
  );
};

export default DarkModeProvider;