import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import { Image } from "antd";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Player } from "video-react";
import one from "../../Images/1.png";
import two from "../../Images/2.png";
import three from "../../Images/3.png";
import think from "../../Images/think.png";
import idea from "../../Images/idea.png";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

function MediaControlCardLeft({ name, img, des }) {
  const theme = useTheme();

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
  const theme = useTheme();

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

export default function TestimonialsMain() {
  return (
    <ThemeProvider theme={theme}>
      {/*  <CssBaseline /> */}
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
        {/* <Player
          playsInline
          poster="https://images.unsplash.com/photo-1475552113915-6fcb52652ba2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM2fHxyYW5kb20lMjBwZW9wbGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        /> */}
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
          {/* <Image
                src="https://images.unsplash.com/photo-1559839295-2ea245793003?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0YXNoYXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                width={180}
                height={200}
                style={{ boxShadow: "-12px 13px 0px -2px #61fbda",alignItems:"right" }}
              /> */}
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
