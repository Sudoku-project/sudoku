import React, { createContext, useState, useEffect } from 'react';

export const DarkModeContext = createContext();

const DarkModeContextProvider = (props) => {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // The favorite theme is saved in local storage
    const previousTheme = localStorage.getItem('dark_mode');

    // If user's device has a favorite theme,
    if(window.matchMedia) {
      // We can set dark or light mode in state
      if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode(true);
        localStorage.setItem('dark_mode', true);
      } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        setDarkMode(false);
        localStorage.setItem('dark_mode', false);
      };
    };

    // Update the state in terms of previous theme
    if(previousTheme) {
      if(previousTheme === 'true') {
        setDarkMode(true);
        localStorage.setItem('dark_mode', true);
      } else {
        setDarkMode(false);
        localStorage.setItem('dark_mode', false);
      };
    };
  }, []);
  
  // When user toggle the theme, in DarkMode component, 
  const toggleTheme = () => {
    // we save change in local storage
    if (darkMode === true) {
      localStorage.setItem('dark_mode', false);
    } else {
      localStorage.setItem('dark_mode', true);
    };
    
    // & we update the state
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{darkMode, toggleTheme}}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;