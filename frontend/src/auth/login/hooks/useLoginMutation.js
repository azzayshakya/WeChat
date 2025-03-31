import { useMutation } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {  loginApi } from "@/apis/apiServices";

export const useLoginMutation = () => {
  // const navigate = useNavigate();

  const {
  mutate: submitLoginMutation,
  isPending: isSubmitting,  
  isSuccess,
  isError,
  error,
} = useMutation({
  mutationFn: loginApi,
    onSuccess: (data) => {
      const { accessToken, ...userDetails } = data;

      toast.success(`Welcome back, 🎉`);
      console.log(data, accessToken, userDetails);
      // navigate("/home");
    },
    onError: (error) => {
      const errorMessage = error?.response?.data?.message || "Login failed.";
      toast.error(`Error: ${errorMessage}`);
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