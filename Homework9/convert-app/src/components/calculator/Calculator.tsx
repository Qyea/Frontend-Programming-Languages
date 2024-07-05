import { useState } from "react";

import Grid from "@mui/material/Unstable_Grid2";

import IconButton from "@mui/material/IconButton";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

import { ConvertInput } from "./input";
import { ConvertSelector } from "./selector";

export const Calculator = () => {
  const [amount, setAmount] = useState("");

  const [currency, setCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");
    setAmount(value);
  };

  return (
    <div>
      <Typography variant="h2">I want to convert</Typography>
      <div>
        <Grid container spacing={0.5}>
          <ConvertInput amount={amount} setAmount={handleInputChange} />
          <ConvertSelector
            currency={currency}
            onChangeCurrency={(cur: React.ChangeEvent<HTMLInputElement>) => {
              console.log(cur.target.value);
              setCurrency(cur.target.value);
            }}
          />
          <IconButton aria-label="delete">
            <CurrencyExchangeIcon />
          </IconButton>
          <ConvertSelector
            currency={toCurrency}
            onChangeCurrency={(cur: React.ChangeEvent<HTMLInputElement>) => {
              console.log(cur.target.value);
              setToCurrency(cur.target.value);
            }}
          />
          <Button variant="contained">Convert</Button>
        </Grid>
      </div>
    </div>
  );
};
