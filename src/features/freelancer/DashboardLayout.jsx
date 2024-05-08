import React from "react";

import Stats from "./Stats";
import Loading from "../../ui/Loading";
import useProposal from "../proposal/useProposal";
import DashboardHeader from "../../pages/DashboardHeader";

function DashboardLayout() {
  const { proposals, isLoading } = useProposal();
  if (isLoading) return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
}

export default DashboardLayout;
