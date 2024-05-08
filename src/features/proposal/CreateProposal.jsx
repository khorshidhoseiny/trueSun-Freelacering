import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import useCreateProposal from "./useCreateProposal";

function CreateProposal({ onClose, projectId }) {
  const { createProposal, isCreating } = useCreateProposal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (data) => {
    console.log(data);
    createProposal(
      { ...data, projectId },
      {
        onSuccess: () => onClose(),
      }
    );
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(SubmitHandler)}>
        <TextField
          label="توضیحات"
          name="description"
          register={register}
          required
          type="text"
          validationSchema={{
            required: "وارد کردن توضیحات ضروری است",
            minLength: {
              value: 15,
              message: "حداقل 15 کاراکتر را وارد کنید",
            },
          }}
          errors={errors}
        />
        <TextField
          label="قیمت"
          register={register}
          required
          name="price"
          type="number"
          validationSchema={{
            required: "وارد کردن قیمت ضروری است",
          }}
          errors={errors}
        />
        <TextField
          label="مدت زمان"
          register={register}
          required
          name="duration"
          type="number"
          validationSchema={{
            required: "وارد کردن مدت زمان ضروری است",
          }}
          errors={errors}
        />
        <div className="!mt-8">
          {isCreating ? (
            <Loading />
          ) : (
            <button type="submit" className="btn w-full btn--primary ">
              ارسال
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateProposal;
