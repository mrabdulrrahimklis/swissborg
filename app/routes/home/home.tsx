import { useEffect } from "react";
import { useCurrencyValue } from "~/providers/eurEquivalentProvider";
import { TableHead } from "~/routes/home/components/tableHead";
import { TableItem } from "~/routes/home/components/tableItem";
import type { Route } from "../home/+types/home";
import { useEuroEquivalent } from "./hooks/useEuroEquivalent";
import { useTransactions } from "./hooks/useTransactionData";
import type { ITransaction } from "./types/transaction";

const LOCAL_STORAGE_KEY = "currencyValues";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Swissborg" },
    { name: "description", content: "Welcome to Swissborg App!" },
  ];
}

export default function Home() {
  const { data, isLoading, error } = useTransactions();
  const { data: eurEquivalentData } = useEuroEquivalent();
  const { currencyValues, setCurrencyValues } = useCurrencyValue();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedValues = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEY) || "{}"
      );
      
      const mergedValues = {
        CHF: eurEquivalentData?.CHF ?? storedValues.CHF ?? null,
        USD: eurEquivalentData?.USD ?? storedValues.USD ?? null,
        BTC: eurEquivalentData?.BTC ?? storedValues.BTC ?? null,
      };

      setCurrencyValues(mergedValues);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mergedValues));
    }
  }, [eurEquivalentData, setCurrencyValues]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <>Error</>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-2 mb-4 text-xl">
        <div>1BTC = {currencyValues?.BTC} EUR</div>
        <div>1CHF = {currencyValues?.CHF} EUR</div>
        <div>1USD = {currencyValues?.USD} EUR</div>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <TableHead
            headItems={[
              "Date",
              "Currency",
              "Amount",
              "EUR Equivalent",
              "Type",
              "Status",
            ]}
          />
          <tbody className="bg-white divide-y divide-gray-200">
            {data?.transactions.map((transaction: ITransaction) => (
              <TableItem item={transaction} key={transaction.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
