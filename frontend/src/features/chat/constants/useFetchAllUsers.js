import { useQuery } from "@tanstack/react-query";
import { getAllUsersApi } from "@/apis/apiServices";
import { toast } from "react-toastify";

export const useFetchAllUsers = () => {
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["all-users"],
    queryFn: getAllUsersApi,
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
