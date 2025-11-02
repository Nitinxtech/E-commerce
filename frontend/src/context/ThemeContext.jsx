import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(() => localStorage.getItem("dark") === "true");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", !dark);
    localStorage.setItem("dark", !dark);
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggleDark: () => setDark(!dark) }}>
      {children}
    </ThemeContext.Provider>
  );
};