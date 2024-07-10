import { Box } from "@mui/material";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import { Context, ContextState } from "../../context";

export const History = () => {
  const { state, setState } = useContext(Context);

  return (
    <Box>
      <h2>Exchange History</h2>
      <div>
        {state.map((result, index) => (
          <div key={index}>
            {result.rate} - {result.date.toString()}
          </div>
        ))}
      </div>
    </Box>
  );
};
