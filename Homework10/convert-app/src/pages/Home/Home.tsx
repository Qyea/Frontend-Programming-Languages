import { Box, Container } from "@mui/material";
import Stack from "@mui/material/Stack";

import { Calculator } from "../../components/calculator";
import { HistoryTable } from "../../components/table/currency";
import { Statistics } from "../../components/table/statistics";

export const Home = () => {
  return (
    <div>
      <Container>
        <Box>
          <Calculator />
        </Box>
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
        >
          <Box flexGrow={1}>
            <HistoryTable limit={7} />
          </Box>
          <Box>
            <Statistics />
          </Box>
        </Stack>
      </Container>
    </div>
  );
};
