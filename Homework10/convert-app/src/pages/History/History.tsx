import { Box } from "@mui/material";
import * as React from "react";
import { Container } from "@mui/material";
import { Context } from "../../context";
import { ContextState } from "../../types";
import { HistoryTable } from "../../components/table";

export const History = () => {
  return (
    <Box>
      <Container>
        <h2>Exchange History</h2>
        <HistoryTable />
      </Container>
    </Box>
  );
};
