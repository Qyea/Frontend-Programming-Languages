import TextField from "@mui/material/TextField";

type Props = {
  amount: string | number;
  setAmount: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function ConvertInput({ amount, setAmount }: Props) {
  return (
    <div>
      <TextField
        id="standard-basic"
        label="Amount"
        variant="standard"
        value={amount}
        onChange={setAmount}
        required
      />
    </div>
  );
}
