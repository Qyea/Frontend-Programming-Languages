import { useContext } from "react";

import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Context } from "../../../context";

export const Statistics = () => {
  let data = [];
  const { state, setState } = useContext(Context);
  let minRate = 0;
  let maxRate = 0;
  let averageRate = "";
  if (state.length) {
    const data = state[state.length - 1].history;
    minRate = data.reduce(
      (min, obj) => Math.min(min, Number(obj.rate)),
      Infinity
    );

    maxRate = data.reduce(
      (max, obj) => Math.max(max, Number(obj.rate)),
      -Infinity
    );

    const sumRates = data.reduce((sum, obj) => sum + Number(obj.rate), 0);
    averageRate = (sumRates / data.length).toFixed(7);
  }

  return (
    <Box pb={5} pt={3}>
      {averageRate && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={2} align="center">
                  Statistics
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Lowest</TableCell>
                <TableCell>{minRate}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Highest</TableCell>
                <TableCell>{maxRate}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Average</TableCell>
                <TableCell>{averageRate}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};
