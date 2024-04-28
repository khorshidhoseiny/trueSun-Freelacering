import React from "react";
import useProjects from "../features/project/useProject";
import Loading from "../ui/Loading";
import ProjectHeader from "../features/project/ProjectHeader";
import ProposalTable from "../features/proposal/ProposalTable";

function Project() {
  const { isLoading, project } = useProjects();
  if (isLoading) return <Loading />;
  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalTable proposals={project.proposals} />
    </div>
  );
}

export default Project;
