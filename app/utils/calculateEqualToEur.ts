import type { ICurrencyValues } from "~/types/ICurrencyValues";

export const calculateEqualToEur = (currency: string, amount: number, currencyValueEur: ICurrencyValues) => {
  if (currency === "BTC") {
    return currencyValueEur.BTC !== null &&  (amount * currencyValueEur.BTC).toFixed(8);
  }

  if (currency === "CHF") {
    return currencyValueEur.CHF !== null && (amount * currencyValueEur.CHF).toFixed(2);
  }

  if (currency === "USD") {
    return currencyValueEur.USD !== null && (amount * currencyValueEur.USD).toFixed(2);
  }
}