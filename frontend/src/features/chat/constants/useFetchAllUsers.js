import { useMutation } from "@tanstack/react-query";
import { getAllUsersApi } from "@/apis/apiServices";
import { toast } from "react-toastify";
import { useState } from "react";

export const useFetchAllUsers = () => {
  const [userData, setUserData] = useState([]);

  const {
    mutate: fetchUsers,
    isPending: isLoading,
    isError,
    error,
  } = useMutation({
    mutationFn: (projectId) => getAllUsersApi(projectId),
    onSuccess: (data) => {
      setUserData(data);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to fetch users");
    },
  });

  return {
    users: userData,
    fetchUsers,
    isLoading,
    isError,
    error,
  };
};
