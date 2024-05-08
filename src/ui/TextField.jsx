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
  return (
    <div>
      <label className="mb-2 block text-secondary-700" htmlFor={name}>
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
