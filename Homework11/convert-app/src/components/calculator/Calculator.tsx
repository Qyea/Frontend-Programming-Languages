import { useState, useEffect } from "react";
// MUI components
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

import IconButton from "@mui/material/IconButton";

// My components
import { getCurrency, getCurrencyHistory } from "../../api/APIUtils";
import { ConvertInput } from "./input";
import { ConvertSelector } from "./selector";
import { ConvertLabel } from "./label";

import { useContext } from "react";
import { Context } from "../../context";

export const Calculator = () => {
  const { state, setState } = useContext(Context);

  const [amount, setAmount] = useState(
    state.length === 0 ? "" : state[state.length - 1].amount
  );
  const [result, setResult] = useState(0);

  const [fromCurrency, setFromCurrency] = useState(
    state.length === 0 ? "eur" : state[state.length - 1].fromCurrency
  );
  const [toCurrency, setToCurrency] = useState(
    state.length === 0 ? "usd" : state[state.length - 1].toCurrency
  );

  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  useEffect(() => {
    onChangeFromPrice();
  }, []);

  useEffect(() => {
    if (
      state.length === 0 ||
      (state.length > 0 && fromPrice !== state[state.length - 1].rate)
    ) {
      const fetchCurrencyHistory = async () => {
        const history = await getCurrencyHistory(fromCurrency, toCurrency);

        const newHistoryExchange = {
          fromCurrency: fromCurrency,
          toCurrency: toCurrency,
          amount: amount,
          rate: fromPrice,
          history: history,
        };

        setState([...state, newHistoryExchange]);
      };

      fetchCurrencyHistory();
    }
  }, [amount, fromPrice, fromCurrency, toCurrency, state]);

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

  const calculatePrice = async (fromPriceValue: number) => {
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

      <Box display="flex" alignItems="start" gap="3rem" sx={{ pt: 4, pb: 1 }}>
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
