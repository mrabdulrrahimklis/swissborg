import { useEffect } from "react";
import { Loading } from "~/components/loading";
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
    return (
      <div className="text-center">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <>
        <div className="mt-20">
          <h2 className="text-2xl text-center">ERROR</h2>
        </div>
        <div className="text-lg text-center">Page not found. Contact Swissborg support team!</div>
      </>
    );
  }

  return (
    <>
      {data?.transactions && <SummaryTable transactions={data.transactions} />}
    </>
  );
}
