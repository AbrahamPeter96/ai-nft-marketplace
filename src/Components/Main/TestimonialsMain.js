import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
          maxWidth: 580,
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
              variant="h6"
              component="div"
              color="#61fbda"
              fontWeight="bolder"
              textAlign="right"
              align="right"
            >
              {name}
            </Typography>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              color="white"
              textAlign="right"
              align="right"
            >
              {des}
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "right",
              pl: 1,
              pb: 1,
              justifyContent: "right",
            }}
          >
            <IconButton aria-label="previous">
              <InstagramIcon color="white" sx={{ color: "#fff" }} />
            </IconButton>
            <IconButton aria-label="play/pause">
              <FacebookIcon sx={{ color: "#fff" }} />
            </IconButton>
            <IconButton aria-label="next">
              <LinkedInIcon sx={{ color: "#fff" }} />
            </IconButton>
          </Box>
        </Box>
        &nbsp; &nbsp;
        <CardMedia
          component="img"
          sx={{
            width: 171,
            boxShadow: "-12px 13px 0px -2px #61fbda",
            alignItems: "right",
            height: 231,
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
          maxWidth: 580,
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
            width: 171,
            boxShadow: "12px 13px 0px -2px #61fbda",
            alignItems: "right",
            height: 231,
          }}
          image={img}
          alt="Live from space album cover"
        />
        &nbsp; &nbsp;
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="#61fbda"
              fontWeight="bolder"
              textAlign="left"
              align="left"
            >
              {name}
            </Typography>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              color="white"
              textAlign="left"
              align="left"
            >
              {des}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              <InstagramIcon color="white" sx={{ color: "#fff" }} />
            </IconButton>
            <IconButton aria-label="play/pause">
              <FacebookIcon sx={{ color: "#fff" }} />
            </IconButton>
            <IconButton aria-label="next">
              <LinkedInIcon sx={{ color: "#fff" }} />
            </IconButton>
          </Box>
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
          SEE WHAT PEOPLE HAVE TO SAY!
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
            img="https://images.unsplash.com/photo-1475552113915-6fcb52652ba2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM2fHxyYW5kb20lMjBwZW9wbGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <br />
          <MediaControlCardLeft
            des=" `i have been selling my nft´s here for so long and i really love
              the way they support there customers`."
            name="Mark"
            img="https://images.unsplash.com/photo-1496345962527-29757c3a3d94?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDAwfHxyYW5kb20lMjBwZW9wbGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <br />
          <MediaControlCardRight
            des=" `i have been selling my nft´s here for so long and i really love
            the way they support there customers`."
            name="Angelina"
            img="https://images.unsplash.com/photo-1465409042654-5314e9d1754b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxyYW5kb20lMjBwZW9wbGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <br />
          <MediaControlCardLeft
            des=" `i have been selling my nft´s here for so long and i really love
              the way they support there customers`."
            name="Burak"
            img="https://images.unsplash.com/photo-1494708001911-679f5d15a946?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzIzfHxyYW5kb20lMjBwZW9wbGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </Container>
      </main>
      <br />
      <br />
      <br />
    </ThemeProvider>
  );
}
