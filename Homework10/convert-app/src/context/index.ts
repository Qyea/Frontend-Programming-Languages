import { createContext, useContext } from "react";

export type ContextState = {
  rate: number;
  date: Date;
};

export type ContextType = {
  state: ContextState[];
  setState: (state: ContextState[]) => void;
};

const defaultState: ContextType = {
  state: [],
  setState: (state: ContextState[]) => {},
};

export const Context = createContext<ContextType>(defaultState);

export const useDataContext = () => {
  const data = useContext(Context);

  if (!data) {
    throw new Error("Please, use context within context.Provider");
  }

  return data;
};
