import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import usechangeUserStatus from "./useChangeUserStatus";
import { useParams } from "react-router-dom";
import RHFSelect from "../../../ui/RHFSelect";
import Loading from "../../../ui/Loading";

function ChangeUserStatus({ userId, onClose }) {
  const options = [
    { label: "رد شده", value: 0 },

    { label: "در انتظار تایید", value: 1 },

    { label: "تایید شده", value: 2 },
  ];
  const { register, handleSubmit } = useForm();
  const { ChangeUserStatus, isEditing } = usechangeUserStatus();

  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    ChangeUserStatus(
      { userId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["users"] });
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          name="status"
          label="تغییر وضعیت"
          required
          register={register}
          options={options}
        />
        <div className="!mt-8">
          {isEditing ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              تغییر وضعیت
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ChangeUserStatus;
