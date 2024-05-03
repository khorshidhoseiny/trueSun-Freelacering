import React from "react";
import FilterDropDown from "../../../ui/FilterDropDown";
import useCategory from "../../../hooks/useCategory";
function ProjectsHeader() {
  const { transformCategories } = useCategory();
  return (
    <div className="flex justify-between text-secondary-700 font-bold mb-8">
      <h1 className="text-lg font-bold">لیست پروژه ها</h1>
      <div>
        {" "}
        <FilterDropDown
          FilterField="category"
          options={[
            {
              value: "ALL",
              label: " دسته بندی  (همه)",
            },
            ...transformCategories,
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectsHeader;
