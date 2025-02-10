import { useQuery } from "@tanstack/react-query";
import { transactionsApiService } from "../services/getTransactionData";

export const useEuroEquivalent = () => {
  return useQuery({
    queryKey: ["euroEquivalent"],
    queryFn: transactionsApiService.getEurEquivalent,
  });
};
