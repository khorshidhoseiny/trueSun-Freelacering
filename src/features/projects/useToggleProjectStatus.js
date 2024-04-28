import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { toggleProjectApi } from "../../services/projectService";

export default function useToggleProject() {
  const queryClient = useQueryClient();

  const { mutate: ToggleProject, isPending: isUpdating } = useMutation({
    mutationFn: toggleProjectApi,
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
  return { ToggleProject, isUpdating };
}
