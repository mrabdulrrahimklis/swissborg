export interface ITransaction {
  id: string;
  timestamp: string;
  type: string;
  status: string;
  currency: string;
  amount: number;
}