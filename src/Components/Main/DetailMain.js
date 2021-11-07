import { CardActionArea } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import one from "../../Images/1.png";
import two from "../../Images/2.png";
import three from "../../Images/3.png";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const theme = createTheme();
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

function ActionAreaCard({ img, title, des }) {
  return (
    <Card
      sx={{
        maxWidth: 335,
        height: 320,
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
          <Typography gutterBottom variant="h5" component="div">
            {/* {title} */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {des}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function ActionSliderCard({ img, title, des }) {
  return (
    <Card
      sx={{
        maxWidth: 325,
        height: 300,
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
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {des}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function ImgMediaCard({ img, avatar, name }) {
  return (
    <Card
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        maxWidth: 265,
      }}
    >
      <CardMedia
        component={"img"}
        alt="green iguana"
        width="180"
        height="280"
        image={img}
      />
      {/* <Image
         src={img}
         width="180"
         height="380"
          fluid
              /> */}
    </Card>
  );
}

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col xs={6}>
              <ActionAreaCard img={two} title="001 ELLAN KARA" />
            </Col>
            <Col xs={6}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="#fff"
                fontWeight="bolder"
                textAlign="left"
              >
                001 ELLAN KARA
              </Typography>
              <Typography
                textAlign="left"
                color="#ccc"
                gutterBottom
                variant="p"
                component="div"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem text of the printing and typesetting industry
              </Typography>
              <br />
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                color="white"
                textAlign="left"
              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2lm1EFIkwNTV3p8QTDZDfHt5La3nTQsZhnw&usqp=CAU"
                  />
                </StyledBadge>
                &nbsp; Burak
              </Typography>
              <br />
              <br />
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                color="#fff"
                fontWeight="bolder"
                textAlign="left"
              >
                $1.0
                <br />
                <Button
                  style={{
                    backgroundColor: "#00e8c9",
                    width: 120,
                    height: 40,
                    borderRadius: "20px",
                    color: "white",
                  }}
                >
                  Buy
                </Button>
                &nbsp;
                <Button
                  style={{
                    backgroundColor: "#00e8c9",
                    width: 120,
                    height: 40,
                    borderRadius: "20px",
                    color: "white",
                  }}
                >
                  Make Offer
                </Button>
              </Typography>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />

        <Container>
          <Typography
            component="h1"
            variant="h5"
            align="center"
            color="white"
            gutterBottom
            fontWeight="bold"
          >
            FEATURED
          </Typography>
          <br />
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
            <ActionSliderCard img={two} title="001 ELLAN KARA" />
            <ActionSliderCard img={one} title="001 ELLAN KARA" />
            <ActionSliderCard img={three} title="001 ELLAN KARA" />
          </Carousel>
        </Container>
      </main>
      <br />
      <br />
      <br />
    </ThemeProvider>
  );
}
