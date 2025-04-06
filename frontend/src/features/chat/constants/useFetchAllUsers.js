import { useQuery } from "@tanstack/react-query";
import { getAllUsersApi } from "@/apis/apiServices";
import { toast } from "react-toastify";

export const useFetchAllUsers = (projectId) => {
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["all-users", projectId],
    queryFn: () => getAllUsersApi(projectId),
    onError: (error) => {
      toast.error(error.message || "Failed to fetch users");
    },
  });

  return {
    users: data,
    isLoading,
    isError,
    error,
  };
};

