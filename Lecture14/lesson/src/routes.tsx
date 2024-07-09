import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./containers/HomePage";
import { InfoPage } from "./containers/InfoPage";
import { NotFoundPage } from "./containers/NotFoundPage";
import { WelcomePage } from "./containers/WelcomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/welcome/:user",
    element: <WelcomePage />,
  },
  {
    path: "/info",
    element: <InfoPage />,
    loader: async () => {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = res.json();
      return data;
    },
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);
