import { useEffect } from "react";
import { useEuroEquivalent } from "../home/hooks/useEuroEquivalent";
import { useTransactions } from "../home/hooks/useTransactionData";
import type { Route } from "../summary/+types/summary";
import { SummaryTable } from "./components/summaryTable";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Summary Dashboard" },
    { name: "description", content: "Welcome to Summary page!" },
  ];
}

export default function Summary() {
  const { data, isLoading, error } = useTransactions();
  const { data: eurEquivalentData } = useEuroEquivalent();

  useEffect(() => {
    if (eurEquivalentData) {
      if (
        eurEquivalentData.BTC !== null &&
        eurEquivalentData.BTC !== undefined
      ) {
        localStorage.setItem("BTC", eurEquivalentData.BTC);
      }

      if (
        eurEquivalentData.CHF !== null &&
        eurEquivalentData.CHF !== undefined
      ) {
        localStorage.setItem("CHF", eurEquivalentData.CHF);
      }

      if (
        eurEquivalentData.USD !== null &&
        eurEquivalentData.USD !== undefined
      ) {
        localStorage.setItem("USD", eurEquivalentData.USD);
      }
    }
  }, [eurEquivalentData]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <>Error</>;
  }
  return (
    <>
      {data?.transactions && <SummaryTable transactions={data.transactions} />}
    </>
  );
}
