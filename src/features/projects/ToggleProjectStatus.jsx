import React from "react";
import useToggleProject from "./useToggleProjectStatus";
import Loading from "../../ui/Loading";
import Toggle from "../../ui/Toggle";

function ToggleProjectStatus({ project }) {
  const { status } = project;
  const { ToggleProject, isUpdating } = useToggleProject();

  const toggleHandler = () => {
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";
    ToggleProject({
      id: project._id,
      data: { status: newStatus },
    });
  };
  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loading height={50} width={50} />
      ) : (
        <Toggle
          enabled={status === "OPEN" ? true : false}
          lable={project.status === "OPEN" ? "باز" : "بسته"}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
