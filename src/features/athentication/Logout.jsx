import React from "react";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import uselogout from "./useLogout";
import Loading from "../../ui/Loading";

function Logout() {
  const { isPending, Logout } = uselogout();
  return isPending ? (
    <Loading />
  ) : (
    <button onClick={Logout} className="flex">
      <HiArrowRightOnRectangle className="w-5 h-5 text-secondary-500 hover:text-error" />
    </button>
  );
}

export default Logout;
