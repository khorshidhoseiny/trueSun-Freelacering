import React from "react";
import RadioInput from "./RadioInput";

function RadioButtonGroup({ register, errors, watch, configs }) {
  const { name, validationSchema = {}, options } = configs;
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-x-8">
        {options.map(({ value, label }) => (
          <RadioInput
            key={value}
            label={label}
            value={value}
            id={value}
            name={name}
            register={register}
            watch={watch}
            validationSchema={validationSchema}
            errors={errors}
          />
        ))}
      </div>
      {errors && errors[name] && (
        <span className="text-error block mt-2 text-sm">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default RadioButtonGroup;
