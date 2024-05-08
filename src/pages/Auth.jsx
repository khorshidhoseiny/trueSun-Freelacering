import React from "react";
import AuthContainer from "../features/athentication/AuthContainer";

function Auth() {
  return (
    <div className="h-screen bg-secondary-0">
      <div className=" container xl:max-w-screen-xl">
        <div className="container xl:max-w-screen-xl">
          <div className="flex justify-center pt-10">
            <AuthContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Auth;
