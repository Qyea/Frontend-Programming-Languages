import { createBrowserRouter } from "react-router-dom";

// import { InfoPage } from "./containers/InfoPage";
// import { NotFoundPage } from "./containers/NotFoundPage";
// import { WelcomePage } from "./containers/WelcomePage";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { About } from "./pages/About";
import { Layout } from "./layout/EntitiesLayout";

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
        path: "about",
        element: <About />,
      },
    ],
  },
]);
