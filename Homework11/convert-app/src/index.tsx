import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import App from "./App";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          body: {
            margin: 0,
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#18A558",
    },
    secondary: {
      main: "#A3EBB1",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
      color: "#47476b",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 400,
      color: "#18A558",
    },
    h3: {
      fontSize: "1.5rem",
      color: "#18A558",
    },
    h4: {
      fontSize: "1.5rem",
      color: "#47476b",
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: "bolder",
    },
    h6: {
      fontSize: "1.5rem",
      color: "#47476b",
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
