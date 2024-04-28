import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";

function SendOTPForm({ isSendingOtp, onSubmit, register }) {
  return (
    <div>
      <form onSubmit={onSubmit} className="space-y-10">
        <TextField
          name="phoneNumber"
          label="شماره موبایل را وارد کنید"
          register={register}
          autoComplete="off"
        />
        <div>
          {isSendingOtp ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full ">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
