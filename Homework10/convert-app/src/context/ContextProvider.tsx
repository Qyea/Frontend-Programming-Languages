import { PropsWithChildren, useState } from "react";
import { Context } from ".";

export const ContextProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState({
    title: "New title",
  });
  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
};
