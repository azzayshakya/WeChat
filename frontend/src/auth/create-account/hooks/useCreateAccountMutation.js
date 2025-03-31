import { useMutation } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { CreateAccountApi } from "@/apis/apiServices";

export const useCreateAccountMutation = () => {
  // const navigate = useNavigate();

  const {
    mutate: submitLoginMutation,
    isPending: isSubmitting,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: CreateAccountApi,
    onSuccess: (data) => {
      const { accessToken, ...userDetails } = data;

      toast.success(`Account Created 🎉`);
      console.log(data, accessToken, userDetails);
      // navigate("/home");
    },
    onError: (error) => {
      console.log(error?.response?.data?.errors?.[0]?.msg)
      const errorMessage = error?.response?.data?.errors?.[0]?.msg || " Failed.";
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
