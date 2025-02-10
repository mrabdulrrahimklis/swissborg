import { apiService } from "~/services/apiService";

class TransactionsApiService {
  async getTransactions(): Promise<any> {
    const transactionsResponse: any = apiService.responseHandler(
      await apiService.get<any>("/transactions")
    );

    return transactionsResponse;
  }

  async getEurEquivalent(): Promise<any> {
    const eurEquivalentResponse: any = apiService.responseHandler(
      await apiService.get<any>("/eur-rates")
    );

    return eurEquivalentResponse;
  }
}

export const transactionsApiService = new TransactionsApiService();
