import { useMutation } from "@tanstack/react-query";
import { addUserToProjectAPI } from "@/lib/api";

export const useAddUserToProject = () => {
  return useMutation({
    mutationFn: addUserToProjectAPI,
    onSuccess: (data) => {
    //   toast.success("User added to the project!");
      console.log("Success:", data);

    },
    onError: (error) => {
        console.log(error)
    //   toast.error(error?.response?.data?.message || "Error adding user");
    },
  });
};
