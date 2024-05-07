import React from "react";
import { HiCollection, HiUsers, HiOutlineViewGrid } from "react-icons/hi";
import Stat from "../../ui/Stat";

function Stats({ proposals, users, projects }) {
  return (
    <div className="grid grid-cols-2  gap-x-8">
      <Stat
        color="green"
        title="کاربران"
        value={users}
        icon={<HiUsers className="w-20 h-20" />}
      />
      <Stat
        color="primary"
        title="درخواست ها"
        value={proposals}
        icon={<HiCollection className="w-20 h-20" />}
      />
      <Stat
        color="yellow"
        title="پروژه ها"
        value={projects}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
