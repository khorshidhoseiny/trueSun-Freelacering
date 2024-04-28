import React from "react";
import RHFSelect from "../../ui/RHFSelect";
import { useForm } from "react-hook-form";
import usechangeProposalStatus from "../proposal/useChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import useProjects from "./useProject";
import { useParams } from "react-router-dom";
import Loading from "../../ui/Loading";

function ChangeProposalStatus({ proposalId, onClose }) {
  const options = [
    { label: "رد شده", value: 0 },

    { label: "در انتظار تایید", value: 1 },

    { label: "تایید شده", value: 2 },
  ];
  const { register, handleSubmit } = useForm();
  const { ChangeStatus, isEditing } = usechangeProposalStatus();
  const { id: projectId } = useParams();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    ChangeStatus(
      { id: proposalId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["project", projectId] });
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

export default ChangeProposalStatus;
