import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { removeProjectsApi } from "../../services/projectService";

export default function useRemoveProject() {
  const queryClient = useQueryClient();

  const { mutate: removeProject, isPaused: isDeleting } = useMutation({
    mutationFn: removeProjectsApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { removeProject, isDeleting };
}
