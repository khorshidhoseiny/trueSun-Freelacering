import React from "react";

function RHFSelect({ label, name, register, options, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-700 ">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select {...register(name)} className="textField__input" id={name}>
        {options.map((option) => {
          return (
            <option
              className="text-secondary-700 "
              value={option.value}
              key={option.value}
            >
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default RHFSelect;
