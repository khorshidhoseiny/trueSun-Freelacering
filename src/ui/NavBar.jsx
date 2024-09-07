import React from "react";
import HeaderMenu from "./HeaderMenu";

function NavBar() {
  return (
    <div className="bg-secondary-0 py-4 px-8 border-b border-secondary-200">
      <div className="container xl:max-w-screen-xl flex justify-between first-line">
        <div className="flex items-center">
          <HeaderMenu />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
