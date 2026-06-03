import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // App is locked to light mode.
  const [theme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.remove('theme-dark');
    try {
      localStorage.setItem('theme', 'light');
    } catch (e) {}
  }, []);

  const setTheme = () => {};
  const toggle = () => {};

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
