import React, { useState } from "react";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";

function ProjectsHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex mb-6 border-b pb-4 border-secondary-300 justify-between items-center">
      <h2 className="font-bold text-secondary-600 ">پروژه های شما</h2>
      <Modal
        title="اضافه کردن پروژه جدید"
        open={open}
        onClose={() => setOpen(false)}
      >
        <CreateProjectForm onClose={() => setOpen(false)} />
      </Modal>
      <button
        onClick={() => setOpen(true)}
        className="btn btn--primary items-center gap-x-2 "
      >
        اضافه کردن پروژه جدید
      </button>
    </div>
  );
}

export default ProjectsHeader;
