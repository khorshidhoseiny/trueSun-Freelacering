import React from "react";
import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";

function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div className="grid grid-cols-2  gap-x-8">
      <Stat
        color="primary"
        title="درخواست ها"
        value={numOfProposals}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        color="yellow"
        title=" درخواست های تایید شده"
        value={acceptedProposals.length}
        icon={<HiCollection className="w-20 h-20" />}
      />
      <Stat
        color="green"
        title="کیف پول"
        value={balance}
        icon={<HiCurrencyDollar className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
