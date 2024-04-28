import React, { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authService";
import { useForm } from "react-hook-form";

function AuthContainer() {
  const [Step, setStep] = useState(2);
  const [phoneNumber, setPhoneNumber] = useState("");
  const {
    isPending: isSendingOtp,
    error,
    data: otpResponse,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });
  const { register, handleSubmit, getValues } = useForm();

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      toast.success(message);
      console.log(data);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderSteps = () => {
    switch (Step) {
      case 1:
        return (
          <SendOTPForm
            setStep={setStep}
            isSendingOtp={isSendingOtp}
            register={register}
            onSubmit={handleSubmit(sendOtpHandler)}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep((s) => s - 1)}
            onReSendOtp={sendOtpHandler}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };
  return <div className="w-full space-y-5 sm:max-w-sm">{renderSteps()}</div>;
}

export default AuthContainer;
