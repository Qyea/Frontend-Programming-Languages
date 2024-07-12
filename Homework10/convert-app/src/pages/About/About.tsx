import { Box, Container, Typography } from "@mui/material";

export const About = () => {
  return (
    <div>
      <Container>
        <Typography variant="h1">About</Typography>
        <Box py={7}>
          <Typography variant="h6">
            Currency Convert App is a web application designed to provide users
            with a convenient way to convert currencies. Whether you're a
            traveler, an international businessperson, or simply curious about
            exchange rates, this app offers a user-friendly interface for
            converting between different currencies quickly and accurately.
          </Typography>
        </Box>
        <Typography variant="h3">
          This application uses routing and context!
        </Typography>
      </Container>
    </div>
  );
};
