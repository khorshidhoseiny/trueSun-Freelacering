import React from "react";

function TextField({
  label,
  name,
  register,
  errors,
  required,
  validationSchema,
  type = "text",
}) {
  console.log(register(name));
  return (
    <div className="flex-col mx-auto space-y-3 justify-center w-full  ">
      <label htmlFor={name}>
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        id={name}
        className="textField__input"
        type={type}
        autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-error block mt-2 text-sm">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;
