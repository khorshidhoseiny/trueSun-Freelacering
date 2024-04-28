import { useQuery } from "@tanstack/react-query";
import { getProposalsApi } from "../../services/proposalService";

export default function useProposal() {
  const { data, isLoading } = useQuery({
    queryFn: getProposalsApi,
    queryKey: ["proposals"],
  });
  const { proposals } = data || [];
  return { proposals, isLoading };
}
