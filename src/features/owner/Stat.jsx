import React from "react";

const colors = {
  primary: "bg-primary-100 text-primary-700",
  green: "bg-green-100 text-green-700",
  yellow: "bg-yellow-100 text-yellow-700",
};

function Stat({ value, title, icon, color }) {
  return (
    <div className="col-span-1 grid grid-rows-2 grid-cols-[6.4rem_1fr] my-5 bg-secondary-0 p-4 rounded-lg gap-x-4  ">
      <div
        className={`row-span-2 flex justify-center items-center aspect-square rounded-full p-2 ${colors[color]} `}
      >
        {icon}
      </div>
      <h5 className="text-secondary-500 text-lg mb-4 font-bold"> {title}</h5>
      <p className="text-3xl font-bold text-secondary-900 ">{value}</p>
    </div>
  );
}
export default Stat;
