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
      console.error(error);
      toast.error("Something went wrong");
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
