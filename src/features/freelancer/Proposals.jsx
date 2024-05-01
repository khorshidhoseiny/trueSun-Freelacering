import React from "react";
import ProposalTable from "../proposal/ProposalTable";

function Proposals() {
  return (
    <div>
      <h1 className="font-black mb-8 text-secondary-700 text-xl">
        پروپوزال های شما
      </h1>
      <ProposalTable />
    </div>
  );
}

export default Proposals;
