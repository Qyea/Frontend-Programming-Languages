import React, { useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import { getCurrencies } from "../../../api/APIUtils";
import { Box } from "@mui/material";

type Props = {
  currency: string;
  onChangeCurrency: (event: React.ChangeEvent<HTMLInputElement>) => void;
  currencyType: string;
};

async function processData() {
  try {
    const data = await getCurrencies();
    const keys = Object.keys(data);
    return keys;
  } catch (error) {
    console.error(error);
  }
}

export const ConvertSelector = function ({
  currency,
  onChangeCurrency,
  currencyType,
}: Props) {
  const [currencyKeys, setCurrencyKeys] = useState<string[] | undefined>(
    undefined
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const keys = await processData();
        setCurrencyKeys(keys);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const currencyLabel = currencyType === "from-currency" ? "From" : "To";

  return (
    <Box>
      <TextField
        id={currencyType}
        select
        label={currencyLabel}
        helperText="Please select your currency"
        onChange={onChangeCurrency}
        value={currency}
        SelectProps={{
          id: currencyType,
        }}
      >
        {currencyKeys
          ? currencyKeys.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))
          : []}
      </TextField>
    </Box>
  );
};
