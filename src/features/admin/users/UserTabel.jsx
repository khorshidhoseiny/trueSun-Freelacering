import React from "react";
import useUsers from "../useUsers";
import Loading from "../../../ui/Loading";
import Empty from "../../../ui/Empty";
import Table from "../../../ui/Table";
import UserRow from "./UserRow";

function UserTabel() {
  const { isLoading, users } = useUsers();
  if (isLoading) return <Loading />;

  if (!users.length) return <Empty resourceName="کاربری " />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>نام</th>
        <th>ایمیل</th>
        <th>شماره موبایل</th>
        <td>نقش</td>
        <th>وضعیت</th>
        <td>عملیات</td>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => (
          <UserRow key={user._id} user={user} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default UserTabel;
