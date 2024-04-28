import React from "react";
import { NavLink } from "react-router-dom";

export default function CustomNavlink({ children, to }) {
  const navlinkClases =
    "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900  p-2 rounded-lg duration-150 transition-all ease-in ";

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? ` bg-primary-100/80 text-primary-900 ${navlinkClases}`
            : `text-secondary-600  ${navlinkClases}`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
