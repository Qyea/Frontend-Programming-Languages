import React, { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { createContext } from "react";
import { router } from "./routes";

const Context = createContext({
  name: "Some data",
});

const Child = () => {
  const data = useContext(Context);
  return <p>{data.name}</p>;
};

export const App = () => {
  return (
    <Context.Provider
      value={{
        name: "Context data",
      }}
    >
      <RouterProvider router={router} />
      <Child />
    </Context.Provider>
  );
};

export default App;
