import React from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkmodeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex">
      <button onClick={toggleDarkMode}>
        {isDarkMode ? (
          <HiOutlineSun className="w-5 h-5 m-auto flex text-primary-900" />
        ) : (
          <HiOutlineMoon className="w-5 h-5 m-auto flex text-primary-900" />
        )}
      </button>
    </div>
  );
}

export default DarkModeToggle;
