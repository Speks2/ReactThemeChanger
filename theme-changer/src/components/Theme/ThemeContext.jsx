import React, { createContext, useContext, useState, useEffect } from 'react';

// Opretter konteksten
const ThemeContext = createContext();


// Opretter en custom hook for at bruge ThemeContext
export const useTheme = () => useContext(ThemeContext);



// Tema Provider komponent
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');


  // Opdateret ThemeProvider del
useEffect(() => {
    document.body.className = theme; // Tilføjer eller fjerner klasser på body element
  }, [theme]);
  

  // useEffect for at hente tema fra localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);


  // Skifter tema og gemmer i localStorage
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
