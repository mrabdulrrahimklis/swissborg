import { useQuery } from "@tanstack/react-query";
import { transactionsApiService } from "../services/getTransactionData";

export const useTransactions = () => {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: transactionsApiService.getTransactions,
  });
};
