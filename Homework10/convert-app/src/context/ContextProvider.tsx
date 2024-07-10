import { PropsWithChildren, useState } from "react";
import { Context, ContextState, ContextType } from ".";

export const ContextProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<ContextState[]>([]);
  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
};
