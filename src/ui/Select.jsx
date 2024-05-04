import React from "react";

function Select({ value, onChange, options }) {
  // console.log(value);
  return (
    <select
      value={value}
      onChange={onChange}
      className="textField__input py-2 text-xs text-secondary-600 bg-secondary-0"
    >
      {options.map((item) => (
        <option value={item.value} key={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
