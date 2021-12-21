import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import pattern from "./.././../Images/pattern.jpg";
import logo from "./.././../Images/newlogo.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Row, Col } from "react-bootstrap";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url("${pattern}")`,
          p: 8,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
        component="footer"
      >
        <Typography variant="h6" align="center" gutterBottom>
          <img
            src={logo}
            width="120"
            height="120"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Typography>
        <Typography variant="h4" align="center" gutterBottom color="skyblue">
          Azimuth
        </Typography>
        <Container style={{ maxWidth: "40em" }}>
          <Typography
            variant="subtitle1"
            align="center"
            color="#ccc"
            component="p"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco.
          </Typography>
        </Container>
        <br />
        <Row style={{ bottom: 0 }}>
          <Col>
            <p style={{ fontSize: "8pt", color: "#ccc" }}> START A PROJECT</p>
            <p style={{ fontSize: "8pt", color: "#ccc" }}>
              We are ready for the challenge adobexd@mail.com
            </p>
          </Col>
          <Col md="auto">
            <p style={{ fontSize: "8pt", color: "#ccc" }}>SAY HELLO</p>
            <p style={{ fontSize: "8pt", color: "#ccc" }}>
              497 Evergreen Rd. Roseville, CA 95673 +44 345 678 903
            </p>
          </Col>
          <Col md="auto">
            <p style={{ fontSize: "8pt", color: "#ccc" }}>JOBS</p>
            <p style={{ fontSize: "8pt", color: "#ccc" }}>
              We are always looking for talent adobexd@mail.com
            </p>
          </Col>
          <Col xs lg="2">
            <AiFillInstagram />
            &nbsp;
            <AiFillFacebook />
            &nbsp;
            <AiFillTwitterSquare />
            &nbsp;
          </Col>
        </Row>
      </Box>
    </ThemeProvider>
  );
}
