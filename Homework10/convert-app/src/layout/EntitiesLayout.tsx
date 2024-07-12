import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

import { Header } from "./components/Header";

export const Layout = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};
