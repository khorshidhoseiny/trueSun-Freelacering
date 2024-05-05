import React from "react";
import AppLayout from "../../ui/AppLayout";
import Sidebar from "../../ui/Sidebar";
import CustomNavlink from "../../ui/CustomeNavlink";
import {
  HiCollection,
  HiHome,
  HiOutlineViewGrid,
  HiUser,
} from "react-icons/hi";

function AdminLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavlink to={"dashboard"}>
          <HiHome />
          <span> داشبورد</span>
        </CustomNavlink>
        <CustomNavlink to={"projects"}>
          <HiUser />
          <span> کاربران</span>
        </CustomNavlink>
        <CustomNavlink to={"projects"}>
          <HiOutlineViewGrid />
          <span>پروژه ها</span>
        </CustomNavlink>
        <CustomNavlink to={"proposals"}>
          <HiCollection />
          <span> درخواست ها</span>
        </CustomNavlink>
      </Sidebar>
    </AppLayout>
  );
}

export default AdminLayout;
