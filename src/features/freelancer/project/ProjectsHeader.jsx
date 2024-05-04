import React from "react";
import FilterDropDown from "../../../ui/FilterDropDown";
import useCategory from "../../../hooks/useCategory";
import Filter from "../../../ui/Filter";

const SortOptions = [
  {
    label: "مرتب سازی (جدید ترین) ",
    value: "latest",
  },
  {
    label: "مرتب سازی (قدیمی ترین) ",
    value: "earliest",
  },
];

const StatusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];

function ProjectsHeader() {
  const { transformCategories } = useCategory();
  return (
    <div className="flex justify-between text-secondary-700 font-bold mb-8">
      <h1 className="text-lg font-bold">لیست پروژه ها</h1>
      <div className="flex gap-x-3">
        <Filter filterField="status" options={StatusOptions} />
        <FilterDropDown filterField="sort" options={SortOptions} />
        <FilterDropDown
          filterField="category"
          options={[
            {
              value: "ALL",
              label: " دسته بندی (همه)",
            },
            ...transformCategories,
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectsHeader;
