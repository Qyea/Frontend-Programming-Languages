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
import { CurrencyData } from "../../../types";
import { Link } from "react-router-dom";

type Props = {
  limit?: number;
};

export const HistoryTable = ({ limit }: Props) => {
  const { state, setState } = useContext(Context);
  let showElements = 0;
  let slicedData: CurrencyData[] = [];
  if (state.length !== 0) {
    showElements = limit ? limit : state[state.length - 1].history.length;
    slicedData = state[state.length - 1].history
      .reverse()
      .slice(0, showElements);
  }

  return (
    <Box pb={5} pt={3}>
      {showElements !== 0 && (
        <TableContainer component={Paper} sx={{ maxHeight: 700 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Rate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {slicedData.map((item) => (
                <TableRow key={item.rate + item.date}>
                  <TableCell>{item.date}</TableCell>

                  <TableCell>
                    <Link
                      to={`/currency-info/${
                        state[state.length - 1].fromCurrency
                      }-${item.rate}`}
                    >
                      {item.rate}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};
