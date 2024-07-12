import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ContextProvider } from "./context/ContextProvider";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        padding: 0,
        margin: 0,
        backgroundColor: "#f8f7fb",
        minHeight: "100vh",
      }}
    >
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </Box>
  );
}

export default App;
