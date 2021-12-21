import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./.././../Images/newlogo.png";
import top from "./.././../Images/top.jpg";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link to="/Buy">Buy Nft's</Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link to="/Sell">Sell Nft's</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      <Link to="/Bid">Bid Nft's</Link>
    </Menu.Item>
  </Menu>
);

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div
        style={{
          backgroundImage: `url("${top}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand>
              <Link to="/Collections">
                <img
                  src={logo}
                  width="70"
                  height="70"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Nav className="me-auto text-white">
                  <Nav.Link style={{ color: "white" }}>
                    <Link to="/Creators" style={{ color: "white" }}>
                      Creators
                    </Link>
                  </Nav.Link>
                  <Nav.Link style={{ color: "white" }}>
                    <Link to="/Testimonials" style={{ color: "white" }}>
                      Testimonials
                    </Link>
                  </Nav.Link>
                  <Nav.Link style={{ color: "white" }}>
                    <Link to="/Collections" style={{ color: "white" }}>
                      Collections
                    </Link>
                  </Nav.Link>
                  <Nav.Link style={{ color: "white" }}>
                    <Link to="/CreateNFT" style={{ color: "white" }}>
                      CreateNFT
                    </Link>
                  </Nav.Link>
                  <Nav.Link style={{ color: "white" }}>
                    <Link to="/Aboutus" style={{ color: "white" }}>
                      About us
                    </Link>
                  </Nav.Link>
                  <Dropdown overlay={menu} style={{ color: "white" }}>
                    <Nav.Link
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                      style={{ color: "white" }}
                    >
                      More <DownOutlined />
                    </Nav.Link>
                  </Dropdown>
                </Nav>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <main>
          <Box
            sx={{
              pt: 18,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Container style={{ maxWidth: "40em" }}>
                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  color="white"
                  gutterBottom
                  fontWeight="bolder"
                >
                  ` azimuth is a platform where you get your nft´ s labeled and
                  secured.!`
                </Typography>
                <Typography variant="p" align="center" color="white" paragraph>
                  you have your nft´ s in your porfolioo now.
                </Typography>
              </Container>
            </Container>
          </Box>
        </main>
      </div>
    </ThemeProvider>
  );
}
