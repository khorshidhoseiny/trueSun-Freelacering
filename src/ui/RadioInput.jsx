import React from "react";

function RadioInput({ name, id, watch, value, label, register }) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        className="cursor-pointer w-4 h-4 form-radio focus:ring-primary-900 text-prring-primary-900 "
        type="radio"
        name={name}
        id={id}
        {...register(name)}
        value={value}
        checked={watch(name) === value}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default RadioInput;
