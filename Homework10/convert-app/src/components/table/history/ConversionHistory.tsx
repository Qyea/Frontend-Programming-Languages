import { Box, TableSortLabel } from "@mui/material";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import { Context } from "../../../context";

export const ConversionHistory = () => {
  const { state } = useContext(Context);

  const filtered = state.filter((item) => item.rate !== 0);

  return (
    <Box pb={5} pt={3}>
      <TableContainer component={Paper} sx={{ maxHeight: 700 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
              <TableCell>Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((item) => (
              <TableRow key={item.rate}>
                <TableCell>{item.fromCurrency}</TableCell>
                <TableCell>{item.toCurrency}</TableCell>
                <TableCell>{item.rate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
