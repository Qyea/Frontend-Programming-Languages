import { createContext, useContext } from "react";
import { ContextState, ContextType } from "./../types";

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
