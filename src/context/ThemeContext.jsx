import React, { createContext, useState, useEffect } from 'react';

// 1. Crear el Contexto
export const ThemeContext = createContext();

// 2. Crear el Proveedor del Contexto
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Lee el tema del localStorage o usa 'light' por defecto
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    // Aplica la clase al body y guarda la preferencia
    document.body.className = `${theme}-theme`;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}