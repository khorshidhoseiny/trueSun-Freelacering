import React from "react";
import useUser from "../features/athentication/useUser";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/athentication/UserAvatar";

function Header() {
  const { isLoading } = useUser();
  return (
    <div className="bg-secondary-0 py-4 px-8 border-b border-secondary-200">
      <div
        className={`container xl:max-w-screen-lg items-center flex justify-end  gap-x-8 
        ${isLoading ? "blur-sm opacity-50" : ""}
        `}
      >
        <UserAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
