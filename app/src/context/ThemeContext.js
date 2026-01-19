import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
    } catch (e) {}
    // default to system preference
    return 'system';
  });

  useEffect(() => {
    const root = document.documentElement;
    const applyTheme = (t) => {
      if (t === 'dark') {
        root.classList.add('theme-dark');
      } else {
        root.classList.remove('theme-dark');
      }
    };

    if (theme === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      applyTheme(mq.matches ? 'dark' : 'light');
      const handle = (e) => applyTheme(e.matches ? 'dark' : 'light');
      try {
        mq.addEventListener ? mq.addEventListener('change', handle) : mq.addListener(handle);
      } catch (e) {
        // ignore
      }
      try {
        localStorage.setItem('theme', theme);
      } catch (e) {}
      return () => {
        try {
          mq.removeEventListener ? mq.removeEventListener('change', handle) : mq.removeListener(handle);
        } catch (e) {}
      };
    }

    applyTheme(theme);
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {}
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
