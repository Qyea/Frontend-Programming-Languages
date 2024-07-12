import Box from "@mui/material/Box";

type Props = {
  label: string | number;
};

export const Text = ({ label }: Props) => {
  return (
    <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
      {label}
    </Box>
  );
};
