import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

const DarkmodeContext = createContext();

export function DarkModeprovider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    "isDarkMode",
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <DarkmodeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkmodeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkmodeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");

  return context;
}
