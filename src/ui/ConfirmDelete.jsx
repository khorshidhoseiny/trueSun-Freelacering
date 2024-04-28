import React from "react";

function ConfirmDelete({ onConfirm, disabled, resourceName, onClose }) {
  return (
    <div>
      <h2 className="font-bold text-base mb-8">
        آیا از حذف {resourceName} مطمين هستید؟
      </h2>
      <div className="flex justify-between items-center gap-16">
        <button
          disabled={disabled}
          onClick={onClose}
          className="btn btn--primary flex-1"
        >
          لغو
        </button>
        <button
          disabled={disabled}
          onClick={onConfirm}
          className="btn btn--danger py-3 flex-1"
        >
          تایید
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
