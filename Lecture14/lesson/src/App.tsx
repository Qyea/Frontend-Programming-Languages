import React from "react";
import { RouterProvider } from "react-router-dom";
import { ContextProvider } from "./context/ContextProvider";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { router } from "./routes";

export const App = () => {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
      <Header />
      <Main />
    </ContextProvider>
  );
};

export default App;
