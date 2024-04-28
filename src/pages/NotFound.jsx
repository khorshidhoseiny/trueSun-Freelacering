import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import UseMoveBack from "../hooks/useMoveBack";

function NotFound() {
  const moveBack = UseMoveBack();
  return (
    <div className="sm:max-w-sm flex justify-center items-center pt-10">
      <div>
        <h1 className="text-xl font-bold text-secondary-700 mb-8">
          صفحه ی مورد نظر پیدا نشد
        </h1>
        <button onClick={moveBack} className="text-primary-900 flex gap-x-3">
          <HiArrowCircleRight className="w-6 h-6 text-primary-900" />
          <span>بازگشت</span>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
