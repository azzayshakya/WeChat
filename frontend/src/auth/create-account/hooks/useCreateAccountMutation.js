import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
import { CreateAccountApi } from "@/apis/apiServices";
import { toast } from "react-toastify";
export const useCreateAccountMutation = () => {
  const navigate = useNavigate();

  const {
    mutate: submitLoginMutation,
    isPending: isSubmitting,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: CreateAccountApi,
    onSuccess: (data) => {
      const { token, user } = data;
      toast.success(`Account Created 🎉`);
      localStorage.setItem("wechatUserToken", token);

      localStorage.setItem("wechatUser", JSON.stringify(user));
      navigate("/home");
    },
    onError: (error) => {
      toast.error(error.message || "failed to create account")
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
