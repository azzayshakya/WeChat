import { useMutation } from "@tanstack/react-query";
import { getProjectDetailsApi } from "@/apis/apiServices";
import { useState } from "react";
import { toast } from "react-toastify";

export const useProjectDetails = () => {
  const [projectData, setProjectData] = useState(null);

  const {
    mutate: fetchProjectDetails,
    isLoading,
    isError,
    error,
  } = useMutation({
    mutationFn: (projectId) => getProjectDetailsApi(projectId),
    onSuccess: (data) => {
      setProjectData(data.project || null);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to fetch project details");
    },
  });

  return {
    project: projectData,
    fetchProjectDetails,
    isLoading,
    isError,
    error,
  };
};
