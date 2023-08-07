import React, { useState, useEffect } from 'react';

export const ModeDarkContext = React.createContext({
  darkMode: false,
  onLightMode: () => {},
  onDarkMode: () => {},
});

export default function ModeDarkContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (darkMode) {
      handleDarkMode();
    } else {
      handleLightMode();
    }
  }, [darkMode]);

  function handleDarkMode() {
    const html = document.querySelector('html');
    html.classList.add('dark');
    setDarkMode(true);
    localStorage.setItem('darkmode', 'true');
  }

  function handleLightMode() {
    const html = document.querySelector('html');
    html.classList.remove('dark');
    setDarkMode(false);
    localStorage.setItem('darkmode', 'false');
  }

  return (
    <ModeDarkContext.Provider
      value={{
        darkMode: darkMode,
        onDarkMode: handleDarkMode,
        onLightMode: handleLightMode,
      }}
    >
      {children}
    </ModeDarkContext.Provider>
  );
}
