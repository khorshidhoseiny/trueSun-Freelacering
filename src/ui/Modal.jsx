import React from "react";
import { HiOutlineX } from "react-icons/hi";
import UseOutSideClick from "../hooks/useOutSideClick";

function Modal({ open, onClose, title, children }) {
  const ref = UseOutSideClick(onClose);
  return (
    open && (
      <div
        className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen bg-secondary-800 
    bg-opacity-30 z-50 "
      >
        <div
          ref={ref}
          className="fixed top-1/2 left-1/2 p-3 -translate-x-1/2 -translate-y-1/2 rounded-lg 
bg-secondary-0 shadow-lg transition-all duration-500 ease-out
 w-[calc(100vw-2rem)] md:max-w-[20rem]
 max-h-[calc(100vh-2rem)]
   overflow-y-auto"
        >
          <div className="flex items-center border-b border-b-secondary-300 pb-2 mb-6 justify-between ">
            <p className="text-secondary-700 text-base flex items-end font-bold">
              {title}
            </p>
            <button>
              <HiOutlineX
                onClick={onClose}
                className="w-4 h-4 text-secondary-500"
              />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
