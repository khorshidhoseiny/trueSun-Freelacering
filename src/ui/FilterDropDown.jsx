import React from "react";
import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function FilterDropDown({ FilterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(FilterField) || "";
  const handleSubmit = (e) => {
    searchParams.set(value, e.target.value);
    setSearchParams(searchParams);
  };

  return <Select value={value} onChange={handleSubmit} options={options} />;
}

export default FilterDropDown;
