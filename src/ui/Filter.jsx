import React from "react";
import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  const handleClick = (value) => {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex text-xs rounded-md items-center text-secondary-700">
      <span>وضعیت</span>
      <div className="flex items-center  gap-x-2 mx-2 rounded-lg border border-secondary-100 bg-secondary-0 ">
        {options.map((item) => {
          const isActive = item.value === currentFilter;
          return (
            <button
              key={item.value}
              onClick={() => handleClick(item.value)}
              className={`whitespace-nowrap px-2 py-1.5 rounded-md font-bold transition-all duration-300
              ${
                isActive
                  ? "bg-primary-900 text-white"
                  : " bg-secondary-0 text-secondary-800"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
