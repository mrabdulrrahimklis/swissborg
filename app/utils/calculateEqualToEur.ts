import type { ICurrencyValues } from "~/types/ICurrencyValues";

export const calculateEqualToEur = (currency: string, amount: number, currencyValueEur: ICurrencyValues) => {
  if (currency === "BTC") {
    return currencyValueEur.BTC !== null &&  amount * currencyValueEur.BTC;
  }

  if (currency === "CHF") {
    return currencyValueEur.CHF !== null && amount * currencyValueEur.CHF;
  }

  if (currency === "USD") {
    return currencyValueEur.USD !== null && amount * currencyValueEur.USD;
  }
}