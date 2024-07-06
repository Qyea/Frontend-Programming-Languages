import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import { getCurrencies } from "../../../API/APIUtils";

type Props = {
  currency: string;
  onChangeCurrency: (event: React.ChangeEvent<HTMLInputElement>) => void;
  currencyType: string;
};

const tempCurrencies = getCurrencies();

console.log(tempCurrencies);

const currencies = [
  {
    value: "usd",
    label: "$",
  },
  {
    value: "eur",
    label: "€",
  },
  {
    value: "btc",
    label: "฿",
  },
  {
    value: "jpy",
    label: "¥",
  },
  {
    value: "rub",
    label: "₽",
  },
  {
    value: "byn",
    label: "Br",
  },
];

export const ConvertSelector = function ({
  currency,
  onChangeCurrency,
  currencyType,
}: Props) {
  const currencyLabel = currencyType === "from-currency" ? "From" : "To";

  return (
    <div>
      <TextField
        id={currencyType}
        select
        label={currencyLabel}
        defaultValue="EUR"
        helperText="Please select your currency"
        onChange={onChangeCurrency}
        value={currency}
        SelectProps={{
          id: currencyType,
        }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};
