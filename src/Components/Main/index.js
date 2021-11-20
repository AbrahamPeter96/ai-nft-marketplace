import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Button from "@mui/material/Button";
// import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Row, Col } from "react-bootstrap";
// import CssBaseline from "@mui/material/CssBaseline";
// import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
// import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import one from "../../Images/1.png";
import two from "../../Images/2.png";
import three from "../../Images/3.png";

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

function ActionAreaCard({ img, title, des }) {
  return (
    <Card
      sx={{
        maxWidth: 325,
        height: 240,
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "-12px 13px 0px -2px #61fbda",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            {des}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      {/*  <CssBaseline /> */}
      <br />
      <br />
      <br />
      <main
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Row xs={1} md={2} lg={3} className="g-2">
          <Col>
            <ActionAreaCard img={three} title="001 ELLAN KARA" />
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              001 ELLAN KARA
            </Typography>
          </Col>
          <Col>
            <ActionAreaCard img={one} title="001 ELLAN KARA" />
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              001 ELLAN KARA
            </Typography>
          </Col>
          <Col>
            <ActionAreaCard img={two} title="001 ELLAN KARA" />
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              001 ELLAN KARA
            </Typography>
          </Col>

          <Col>
            <ActionAreaCard img={two} title="001 ELLAN KARA" />
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              001 ELLAN KARA
            </Typography>
          </Col>
          <Col>
            <ActionAreaCard img={one} title="001 ELLAN KARA" />
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              001 ELLAN KARA
            </Typography>
          </Col>
          <Col>
            <ActionAreaCard img={three} title="001 ELLAN KARA" />
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              001 ELLAN KARA
            </Typography>
          </Col>

          <Col>
            <ActionAreaCard img={one} title="001 ELLAN KARA" />
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              001 ELLAN KARA
            </Typography>
          </Col>
          <Col>
            <ActionAreaCard img={three} title="001 ELLAN KARA" />
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              001 ELLAN KARA
            </Typography>
          </Col>
          <Col>
            <ActionAreaCard img={two} title="001 ELLAN KARA" />
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              001 ELLAN KARA
            </Typography>
          </Col>

          <Col>
            <ActionAreaCard img={three} title="001 ELLAN KARA" />
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              001 ELLAN KARA
            </Typography>
          </Col>
          <Col>
            <ActionAreaCard img={two} title="001 ELLAN KARA" />
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              001 ELLAN KARA
            </Typography>
          </Col>
          <Col>
            <ActionAreaCard img={one} title="001 ELLAN KARA" />
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              001 ELLAN KARA
            </Typography>
          </Col>
        </Row>

        {/* 
        <Container
          sx={{ py: 7, alignItems: "center", justifyContent: "center" }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={3} sm={4} md={4}>
                <ActionAreaCard img={three} title="001 ELLAN KARA" />
                <Typography gutterBottom variant="h5" component="div" color="white" style>
                  001 ELLAN KARA
                </Typography>
              </Grid>
              <Grid item xs={3} sm={4} md={4}>
                <ActionAreaCard img={two} title="001 ELLAN KARA" />
                <Typography gutterBottom variant="h5" component="div" color="white">
                  001 ELLAN KARA
                </Typography>
              </Grid>
              <Grid item xs={3} sm={4} md={4}>
                <ActionAreaCard img={one} title="001 ELLAN KARA" />
                <Typography gutterBottom variant="h5" component="div" color="white">
                  001 ELLAN KARA
                </Typography>
              </Grid>
              <Grid item xs={3} sm={4} md={4}>
                <ActionAreaCard img={two} title="001 ELLAN KARA" />
                <Typography gutterBottom variant="h5" component="div" color="white">
                  001 ELLAN KARA
                </Typography>
              </Grid>
              <Grid item xs={3} sm={4} md={4}>
                <ActionAreaCard img={one} title="001 ELLAN KARA" />
                <Typography gutterBottom variant="h5" component="div" color="white">
                  001 ELLAN KARA
                </Typography>
              </Grid>
              <Grid item xs={3} sm={4} md={4}>
                <ActionAreaCard img={three} title="001 ELLAN KARA" />
                <Typography gutterBottom variant="h5" component="div" color="white">
                  001 ELLAN KARA
                </Typography>
              </Grid>
              <Grid item xs={3} sm={4} md={4}>
                <ActionAreaCard img={one} title="001 ELLAN KARA" />
                <Typography gutterBottom variant="h5" component="div" color="white">
                  001 ELLAN KARA
                </Typography>
              </Grid>
              <Grid item xs={3} sm={4} md={4}>
                <ActionAreaCard img={three} title="001 ELLAN KARA" />
                <Typography gutterBottom variant="h5" component="div" color="white">
                  001 ELLAN KARA
                </Typography>
              </Grid>
              <Grid item xs={3} sm={4} md={4}>
                <ActionAreaCard img={two} title="001 ELLAN KARA" />
                <Typography gutterBottom variant="h5" component="div" color="white">
                  001 ELLAN KARA
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
    */}
      </main>
      <br />
      <br />
      <br />
    </ThemeProvider>
  );
}
