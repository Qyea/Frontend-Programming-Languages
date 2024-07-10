import { useState, useEffect } from "react";
// MUI components
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

import IconButton from "@mui/material/IconButton";

// My components
import { getCurrency } from "../../api/APIUtils";
import { ConvertInput } from "./input";
import { ConvertSelector } from "./selector";
import { ConvertLabel } from "./label";

export const Calculator = () => {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(0);

  const [fromCurrency, setFromCurrency] = useState("eur");
  const [toCurrency, setToCurrency] = useState("usd");

  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  useEffect(() => {
    onChangeFromPrice();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const onClickChangeCurrency = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);

    setFromPrice(toPrice);
    setToPrice(fromPrice);

    calculatePrice(toPrice);
  };

  const calculatePrice = (fromPriceValue: number) => {
    let finalPrice = Number(amount) * fromPriceValue;
    const roundedNumber = parseFloat(finalPrice.toFixed(3));
    setResult(roundedNumber);
  };

  const onChangeFromPrice = async () => {
    try {
      const resultFrom = await getCurrency(fromCurrency, toCurrency);
      const resultTo = await getCurrency(toCurrency, fromCurrency);

      const fromPriceValue = Number(resultFrom);
      const toPriceValue = Number(resultTo);

      setFromPrice(fromPriceValue);
      setToPrice(toPriceValue);

      calculatePrice(fromPriceValue);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Typography variant="h1">I want to convert</Typography>

      <Box display="flex" alignItems="start" gap="3rem" sx={{ py: 6 }}>
        <ConvertInput amount={amount} setAmount={handleInputChange} />
        <ConvertSelector
          currency={fromCurrency}
          onChangeCurrency={(cur: React.ChangeEvent<HTMLInputElement>) => {
            setFromCurrency(cur.target.value);
          }}
          currencyType="from-currency"
        />
        <IconButton
          onClick={onClickChangeCurrency}
          aria-label="currency-exchange"
        >
          <CurrencyExchangeIcon />
        </IconButton>
        <ConvertSelector
          currency={toCurrency}
          onChangeCurrency={(cur: React.ChangeEvent<HTMLInputElement>) => {
            setToCurrency(cur.target.value);
          }}
          currencyType="to-currency"
        />
        <Button onClick={onChangeFromPrice} variant="contained">
          Convert
        </Button>
      </Box>

      <ConvertLabel
        fromAmount={amount}
        fromCurrency={fromCurrency}
        toAmount={result}
        toCurrency={toCurrency}
        fromPrice={fromPrice}
        toPrice={toPrice}
      />
    </div>
  );
};
