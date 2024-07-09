import { createContext, useContext } from "react";

type ContextState = {
  title: string;
};

type ContextType = {
  state: ContextState;
  setState: (state: ContextState) => void;
};

const defaultState = {
  state: {
    title: "Hello World",
  },
  setState: () => {},
};

export const Context = createContext<ContextType>(defaultState);

export const useDataContext = () => {
  const data = useContext(Context);

  if (!data) {
    throw new Error("Please, use context within context.Provider");
  }

  return data;
};
