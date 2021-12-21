import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Image } from "antd";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import think from "../../Images/think.png";
import idea from "../../Images/idea.png";

const theme = createTheme();

function MediaControlCardLeft({ name, img, des }) {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Card
        sx={{
          display: "flex",
          background: "transparent",
          maxWidth: 780,
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#61fbda"
              fontWeight="bolder"
              textAlign="right"
              align="right"
            >
              SOLUTION
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="white"
              textAlign="right"
              align="right"
              fontWeight="bold"
            >
              it is a long established fact that a reader will be distracted.
            </Typography>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              color="white"
              textAlign="right"
              align="right"
            >
              many desktop publishing packages and web page editors now use
              lorem ipsum as their default model text, and a search for 'lorem
              ipsum'
            </Typography>
          </CardContent>
        </Box>
        &nbsp; &nbsp;
        <CardMedia
          component="img"
          sx={{
            width: 191,
            alignItems: "right",
            height: 251,
          }}
          image={img}
          alt="Live from space album cover"
        />
      </Card>
    </div>
  );
}

function MediaControlCardRight({ name, img, des }) {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Card
        sx={{
          display: "flex",
          background: "transparent",
          maxWidth: 780,
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "center",
          justifyContent: "center",
          maxHeight: 680,
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 191,
            alignItems: "right",
            height: 251,
          }}
          image={img}
          alt="Live from space album cover"
        />
        &nbsp; &nbsp;
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#61fbda"
              fontWeight="bolder"
              textAlign="left"
              align="left"
            >
              Problems
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="white"
              textAlign="left"
              align="left"
              fontWeight="bold"
            >
              it is a long established fact that a reader will be distracted.
            </Typography>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              color="white"
              textAlign="left"
              align="left"
            >
              many desktop publishing packages and web page editors now use
              lorem ipsum as their default model text, and a search for 'lorem
              ipsum'
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
}

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
          HOW AZIMUTH WORKS!
        </Typography>
        <Image src="https://images.unsplash.com/photo-1475552113915-6fcb52652ba2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM2fHxyYW5kb20lMjBwZW9wbGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      </Container>
      <br />
      <br />
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
          LOOK HOW AZIMUTH PROVIDES A SOLUTION!
        </Typography>
      </Container>
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
        <Container>
          <MediaControlCardRight
            des=" `i have been selling my nft´s here for so long and i really love
              the way they support there customers`."
            name="Natasha"
            img={think}
          />
          <br />
          <MediaControlCardLeft
            des=" `i have been selling my nft´s here for so long and i really love
              the way they support there customers`."
            name="Mark"
            img={idea}
          />
          <br />
        </Container>
      </main>
      <br />
      <br />
      <br />
    </ThemeProvider>
  );
}
