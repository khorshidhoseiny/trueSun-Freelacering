import React, { useState } from "react";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ChangeUserStatus from "./ChangeUserStatus";

const statusStyle = [
  { lable: "رد شده", className: "badge--danger" },

  { lable: "در انتظار تایید", className: "badge--secondary" },

  { lable: "تایید شده", className: "badge--success" },
];

function UserRow({ user, index }) {
  const [open, setOpen] = useState(false);
  const { status } = user;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>user.email</td>
      <td>{user.phoneNumber}</td>
      <td>{user.role}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].lable}
        </span>
      </td>
      <td>
        <Modal
          title="تغییر وضعیت کاربر"
          open={open}
          onClose={() => setOpen(false)}
        >
          <ChangeUserStatus
            userId={user._id}
            name="status"
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>تغییر وضعیت کاربر</button>
      </td>
    </Table.Row>
  );
}

export default UserRow;
