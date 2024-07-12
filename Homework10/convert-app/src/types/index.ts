export type CurrencyData = {
  rate: string;
  date: string;
};

export type ContextState = {
  fromCurrency: string;
  toCurrency: string;
  rate: number;
  amount: string;
  history: CurrencyData[];
};

export type ContextType = {
  state: ContextState[];
  setState: (state: ContextState[]) => void;
};
