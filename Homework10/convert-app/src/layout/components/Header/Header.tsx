import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import FindReplaceIcon from "@mui/icons-material/FindReplace";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "white" }}>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              flexGrow: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button variant="text" sx={{ textTransform: "none" }}>
                <FindReplaceIcon />
                <Typography variant="h6">Currency</Typography>
                <Typography variant="h5" color="#47476b">
                  Exchange
                </Typography>
              </Button>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Link style={{ textDecoration: "none", color: "#47476b" }} to="/">
                <Typography>Currency Converter</Typography>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#47476b" }}
                to="/history"
              >
                <Typography>View Conversion History</Typography>
              </Link>
            </Box>
          </Box>
          <Button color="primary">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
