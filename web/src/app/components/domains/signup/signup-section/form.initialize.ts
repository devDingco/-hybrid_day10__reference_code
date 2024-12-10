"use client";

import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { webviewlog } from "@/commons/libraries/webview-log";
import { ISignupSchema } from "./form.schema";

export const useInitialize = (
  method: UseFormReturn<ISignupSchema>,
  setModalOpen: (open: boolean) => void
) => {
  const onSubmit = (data: ISignupSchema) => {
    webviewlog(`회원가입 요청 완료: ${data}`);
    setModalOpen(true); // 여기서 모달을 열도록 설정
  };
  useEffect(() => {
    method.setValue("email", "");
    method.setValue("name", "");
    method.setValue("password", "");
    method.setValue("passwordCheck", "");

    // method.trigger();
  }, []);

  return {
    onSubmit,
  };
};
