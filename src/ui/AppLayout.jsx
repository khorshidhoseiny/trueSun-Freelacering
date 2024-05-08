import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout({ children }) {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen grid-cols-[15rem_1fr]">
      <Header />
      {children}
      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-y-12 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
