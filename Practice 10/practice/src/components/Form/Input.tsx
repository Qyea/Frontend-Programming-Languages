import TextField from "@mui/material/TextField";

type Props = {
  value: string | number;
  onChange: (e: any) => void;
};

export const Input = ({ value, onChange }: Props) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      id="standard-basic"
      label="Standard"
      variant="standard"
    />
  );
};
