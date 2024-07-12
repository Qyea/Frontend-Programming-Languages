import { Box, Typography } from "@mui/material";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";

import { HistoryTable } from "../../components/table/currency";
import { ConversionHistory } from "../../components/table/history";

export const History = () => {
  return (
    <Box>
      <Container>
        <Typography variant="h1">Exchange History</Typography>
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
        >
          <Box flexGrow={1}>
            <Typography variant="h5">Latest currency</Typography>
            <HistoryTable />
          </Box>
          <Box>
            <Typography variant="h5">Your convertions</Typography>
            <ConversionHistory />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
