import React from "react";
import DashboardHeader from "../../pages/DashboardHeader";
import useProposal from "../proposal/useProposal";
import useProjects from "../../hooks/useProjects";
import useUsers from "./useUsers";
import Loading from "../../ui/Loading";
import Stats from "./Stats";

function DashboardLayout() {
  const { proposals, isLoading: Loading1 } = useProposal();
  const { isLoading: Loading2, projects } = useProjects();
  const { isLoading: Loading3, users } = useUsers();
  if (Loading1 || Loading2 || Loading3) return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <Stats
        proposals={proposals.length}
        users={users.length}
        projects={projects.length}
      />
    </div>
  );
}

export default DashboardLayout;
