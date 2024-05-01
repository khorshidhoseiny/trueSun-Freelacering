import React from "react";
import ProjectTable from "../features/freelancer/project/ProjectsTable";
import ProjectsTable from "../features/freelancer/project/ProjectsTable";
import ProjectsHeader from "../features/freelancer/project/ProjectsHeader";

function SubmitedProjects() {
  return (
    <div>
      <ProjectsHeader />
      <ProjectsTable />
    </div>
  );
}

export default SubmitedProjects;
