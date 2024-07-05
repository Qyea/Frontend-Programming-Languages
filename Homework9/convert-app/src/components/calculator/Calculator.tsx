import { useState } from "react";

import { Typography } from "@mui/material";
import { ConvertInput } from "./input";

export const Calculator = () => {
  const [amount, setAmount] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");
    setAmount(value);
  };

  return (
    <div>
      <Typography variant="h2">I want to convert</Typography>
      <ConvertInput amount={amount} setAmount={handleInputChange} />
    </div>
  );
};
