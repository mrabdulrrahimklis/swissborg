import { useEffect } from "react";
import { TableHead } from "~/routes/home/components/tableHead";
import { TableItem } from "~/routes/home/components/tableItem";
import type { Route } from "../home/+types/home";
import { useEuroEquivalent } from "./hooks/useEuroEquivalent";
import { useTransactions } from "./hooks/useTransactionData";
import type { ITransaction } from "./types/transaction";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Swissborg" },
    { name: "description", content: "Welcome to Swissborg App!" },
  ];
}

export default function Home() {
  const { data, isLoading, error } = useTransactions()
  const { data: eurEquivalentData } = useEuroEquivalent()

  useEffect(() => {
    if (eurEquivalentData) {
      if (eurEquivalentData.BTC !== null && eurEquivalentData.BTC !== undefined) {
        localStorage.setItem("BTC", eurEquivalentData.BTC);
      }

      if (eurEquivalentData.CHF !== null && eurEquivalentData.CHF !== undefined) {
        localStorage.setItem("CHF", eurEquivalentData.CHF);
      }

      if (eurEquivalentData.USD !== null && eurEquivalentData.USD !== undefined) {
        localStorage.setItem("USD", eurEquivalentData.USD);
      }
    }
  }, [eurEquivalentData])


  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if(error) {
    return <>Error</>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <TableHead headItems={['Date', 'Currency', 'Amount', 'EUR Equivalent', 'Type', 'Status']} />
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
