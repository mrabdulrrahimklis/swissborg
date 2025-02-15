import { createContext, useContext, useState, type ReactNode } from 'react';
import type { ICurrencyValues } from '~/types/ICurrencyValues';

const defaultValues: ICurrencyValues = {
    CHF: null,
    USD: null,
    BTC: null
};

interface ICurrencyValuesTypes {
    currencyValues: ICurrencyValues;
    setCurrencyValues: (values: ICurrencyValues) => void;
}

const CurrencyContext = createContext<ICurrencyValuesTypes>({
    currencyValues: defaultValues,
    setCurrencyValues: () => {}
});

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
    const [value, setValue] = useState<ICurrencyValues>(defaultValues);

    return (
        <CurrencyContext.Provider value={{ currencyValues: value, setCurrencyValues: setValue }}>
            {children}
        </CurrencyContext.Provider>
    );
}

export const useCurrencyValue = () => useContext(CurrencyContext);