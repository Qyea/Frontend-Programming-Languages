import TextField from "@mui/material/TextField";

type Props = {
  amount: string | number;
  setAmount: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ConvertInput = function ({ amount, setAmount }: Props) {
  return (
    <div>
      <TextField
        id="amount"
        label="Amount"
        variant="standard"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={amount}
        onChange={setAmount}
      />
    </div>
  );
};
