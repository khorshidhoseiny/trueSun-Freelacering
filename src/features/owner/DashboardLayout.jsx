import React from "react";

import Stats from "./Stats";
import useOwnerProjects from "../projects/useOwnerProjects";
import Loading from "../../ui/Loading";
import DashboardHeader from "../../pages/DashboardHeader";

function DashboardLayout() {
  const { projects, isLoading } = useOwnerProjects();

  if (isLoading) return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects} />
    </div>
  );
}

export default DashboardLayout;
