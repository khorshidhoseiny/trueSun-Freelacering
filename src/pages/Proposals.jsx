import React from "react";
import ProposalTable from "../features/proposal/ProposalTable";

function Proposals() {
  return (
    <div>
      <h1 className="font-black mb-8 text-secondary-700 text-xl">
        لیست پروپوزال ها
      </h1>
      <ProposalTable />
    </div>
  );
}

export default Proposals;
