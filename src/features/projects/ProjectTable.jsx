import React from "react";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import useOwnerProjects from "./useOwnerProjects";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();
  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty resourceName="پروژه " />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>تگ ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
        <th>درخواست ها</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow project={project} index={index} key={project._id} />
        ))}
        {console.log()}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable;
