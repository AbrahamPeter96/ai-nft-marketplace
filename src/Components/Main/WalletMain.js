import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Image } from "antd";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function TestimonialsMain() {
  return (
    <ThemeProvider theme={theme}>
      <br />
      <br />
      <br />
      <Container style={{ maxWidth: "50em" }}>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          color="white"
          gutterBottom
          fontWeight="bold"
        >
          YOU NEED AN ETHUREUM WALLET TO COUNTINUE
        </Typography>
        <br />
        <Typography
          component="p"
          variant="p"
          align="center"
          color="gray"
          gutterBottom
          fontWeight="bold"
        >
          Ethereum wallets are applications that let you interact with your
          Ethereum account. Think of it like an internet banking app – without
          the bank.
        </Typography>
        <br />
        <Image src="https://images.unsplash.com/photo-1622102686103-dd4ea18f1d0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZXRoZXJldW18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
    </ThemeProvider>
  );
}
