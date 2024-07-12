import { Box, Button } from "@mui/material";
import { Input } from "./Input";
import { Text } from "./Text";
import { useState } from "react";
import { FormSelect } from "./FormSelect";

export const Form = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(`Send to the server ${value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "20px",
          margin: "20px",
        }}
      >
        <Input value={value} onChange={handleChange} />
        <FormSelect value={value} onChange={handleChange} />
        <Button type="submit" variant="contained">
          Click
        </Button>
      </Box>
      <Text label={value} />
    </form>
  );
};
