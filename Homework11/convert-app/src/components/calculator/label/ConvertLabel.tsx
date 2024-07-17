import { Box } from "@mui/material";
import { Typography } from "@mui/material";

type Props = {
  fromAmount: string;
  fromCurrency: string;
  toAmount: number;
  toCurrency: string;
  fromPrice: number;
  toPrice: number;
};

export const ConvertLabel = ({
  fromAmount,
  fromCurrency,
  toAmount,
  toCurrency,
  fromPrice,
  toPrice,
}: Props) => {
  const formattedFromCurrency = fromCurrency.toUpperCase();
  const formattedToCurrency = toCurrency.toUpperCase();
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box display="flex" alignItems="start" gap="1rem" sx={{ py: 6 }}>
        <Typography variant="h2" color="#b3b3cc">
          {fromAmount ? fromAmount : 0} {formattedFromCurrency} =
        </Typography>
        <Typography variant="h2">
          {toAmount} {formattedToCurrency}
        </Typography>
      </Box>

      <Typography variant="h6">
        1 {formattedFromCurrency} = {fromPrice} {formattedToCurrency}
      </Typography>
      <Typography variant="h6">
        1 {formattedToCurrency} = {toPrice} {formattedFromCurrency}
      </Typography>
    </Box>
  );
};
