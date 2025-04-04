import { useMutation } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
import { loginApi } from "@/apis/apiServices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useLoginMutation = () => {
  const navigate = useNavigate();

  const {
    mutate: submitLoginMutation,
    isPending: isSubmitting,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      const { token, user } = data;

      toast.success(`Welcome back, 🎉`);
      localStorage.setItem("wechatUserToken", token);

      localStorage.setItem("wechatUser", JSON.stringify(user));
      navigate("/home");
    },
  
  });

  return {
    submitLoginMutation,
    isSubmitting,
    isSuccess,
    isError,
    error,
  };
};
