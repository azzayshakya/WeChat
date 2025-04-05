import { useMutation } from "@tanstack/react-query";
import { addUserToProjectAPI } from "@/apis/apiServices";
import { toast } from "react-toastify";

export const useAddUserToProject = () => {
  const {
    mutate: addUserToProject,
    isLoading,
    isError,
    error,
    isSuccess,
    data,
  } = useMutation({
    mutationFn: addUserToProjectAPI,
    onSuccess: (data) => {
      toast.success("User added to the project!");
      console.log("Success:", data);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Error adding user");
      console.error("Error:", error);
    },
  });

  return {
    addUserToProject,
    isLoading,
    isError,
    error,
    isSuccess,
    data,
  };
};
