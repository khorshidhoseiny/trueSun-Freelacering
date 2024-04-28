import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateProjectsApi } from "../../services/projectService";
import { useNavigate } from "react-router-dom";

export default function uselogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: Logout, isPending } = useMutation({
    mutationFn: CreateProjectsApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/auth", { replace: true });
    },
  });
  return { isPending, Logout };
}
