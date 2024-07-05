import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

type Props = {
  currency: string;
  onChangeCurrency: any;
};

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export const ConvertSelector = ({ currency, onChangeCurrency }: Props) => {
  return (
    <div>
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue="EUR"
        helperText="Please select your currency"
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
