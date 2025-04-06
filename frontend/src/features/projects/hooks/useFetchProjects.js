import { fetchProjectsApi } from "@/apis/apiServices";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function useFetchProjects() {
  const {
    mutate: fetchProjects,
    isPending: isFetching,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: fetchProjectsApi,
    onSuccess: (data) => {
      toast.success("Projects fetched successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return {
    fetchProjects,
    isFetching,
    isSuccess,
    isError,
    error,
  };
}
