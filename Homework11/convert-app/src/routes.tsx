import { createBrowserRouter } from "react-router-dom";

// import { InfoPage } from "./containers/InfoPage";
// import { NotFoundPage } from "./containers/NotFoundPage";
// import { WelcomePage } from "./containers/WelcomePage";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { About } from "./pages/About";
import { Layout } from "./layout/EntitiesLayout";
import { CurrencyInfo } from "./pages/CurrencyInfo";
import { Note } from "./redux/reducers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "currency-info/:currencyId",
        element: <CurrencyInfo />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
