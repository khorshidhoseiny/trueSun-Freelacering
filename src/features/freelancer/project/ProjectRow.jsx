import React from "react";
import Table from "../../../ui/Table";
import truncateText from "../../../utils/truncateText";
import toPersianNumbersWithComma from "../../../utils/toPersianNumbers";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { MdAssignmentAdd } from "react-icons/md";

const ProjectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};

function ProjectRow({ project, index }) {
  const { status } = project;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div>
          <span className={` badge ${ProjectStatus[status].className}`}>
            {ProjectStatus[status].label}
          </span>
        </div>
      </td>
      <td>
        <button>
          <MdAssignmentAdd className="text-primary-700 w-5 h-5" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
