import React from "react";
import { HiArrowRight } from "react-icons/hi";
import UseMoveBack from "../../hooks/useMoveBack";

function ProjectHeader({ project = [] }) {
  const moveBack = UseMoveBack();
  return (
    <div className="flex justify-items-end items-center gap-x-3 mb-4 border-b border-secondary-200 pb-2">
      <HiArrowRight
        onClick={moveBack}
        className="w-5 h-5 flex justify-center items-center text-secondary-600"
      />
      <h2 className="font-extrabold text-secondary-700 flex">
        لیست درخواست ها برای {project.title}
      </h2>
    </div>
  );
}

export default ProjectHeader;
