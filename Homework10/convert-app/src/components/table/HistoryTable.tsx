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
import { Context } from "../../context";

type Props = {
  limit?: number;
};

export const HistoryTable = ({ limit }: Props) => {
  const { state, setState } = useContext(Context);
  const showElements = limit ? limit - 1 : state.length;
  const slicedData = state[state.length - 1].history.slice(0, limit);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {slicedData.map((item) => (
            <TableRow key={item.date}>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
