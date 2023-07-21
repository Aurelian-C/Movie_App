import React, { useState, useEffect } from 'react';

export const ModeDarkContext = React.createContext({
  darkMode: false,
  onLightMode: () => {},
  onDarkMode: () => {},
});

export default function ModeDarkContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const darkModeString = localStorage.getItem('darkmode');

  useEffect(() => {
    if (darkModeString === 'true') {
      handleDarkMode();
    } else {
      handleLightMode();
    }
  }, [darkModeString]);

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
