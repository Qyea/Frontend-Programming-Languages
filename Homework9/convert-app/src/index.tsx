import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#18A558",
    },
    secondary: {
      main: "#A3EBB1",
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
