import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

export const Layout = () => {
  return (
    <Box>
      <Header />
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};
