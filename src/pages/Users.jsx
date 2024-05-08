import React from "react";
import UserTabel from "../features/admin/users/UserTabel";

function Users() {
  return (
    <div>
      <h1 className="font-black mb-8 text-secondary-700 text-xl">
      کاربران
      </h1>
      <UserTabel />;
    </div>
  );
}

export default Users;
