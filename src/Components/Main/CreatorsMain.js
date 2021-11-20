import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Button from "@mui/material/Button";
// import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import {Image} from "antd"
// import CssBaseline from "@mui/material/CssBaseline";
// import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import Paper from "@mui/material/Paper";
// import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import one from "../../Images/1.png";
// import two from "../../Images/2.png";
// import three from "../../Images/3.png";

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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

// const SmallAvatar = styled(Avatar)(({ theme }) => ({
//   width: 22,
//   height: 22,
//   border: `2px solid ${theme.palette.background.paper}`,
// }));

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
      {/*  <CssBaseline /> */}
      <br />
      <br />
      <br />
      <Container style={{ maxWidth: "50em" }}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="white"
          gutterBottom
          fontWeight="bold"
        >
          DIFFERENT CATEGORIES ARE MADE TO SELL AND BUY.
        </Typography>
      </Container>
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
            <ActionAreaCard
              img="https://images.unsplash.com/photo-1620912189523-9a506dd6122a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fG5mdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              title="BECOME PARTNERS"
            />
            <br />
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="#61fbda"
              fontWeight="bolder"
            >
              BECOME PARTNERS
            </Typography>
            <Typography gutterBottom variant="p" component="div" color="white">
              know who´s selling what and collaborate
            </Typography>
          </Col>
          <Col>
            <ActionAreaCard
              img="https://images.unsplash.com/photo-1617791116959-f09c8987a947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fG5mdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              title="001 ELLAN KARA"
            />
            <br />
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="#61fbda"
              fontWeight="bolder"
            >
             SHARE YOUR ARTWORK
            </Typography>
            <Typography gutterBottom variant="p" component="div" color="white">
              share from wherever you´re making
            </Typography>
          </Col>
          <Col>
            <ActionAreaCard
              img="https://images.unsplash.com/photo-1559102877-4a2cc0e37fce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              title="001 ELLAN KARA"
            />
            <br />
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="#61fbda"
              fontWeight="bolder"
            >
             GET NFT´S LABELED
            </Typography>
            <Typography gutterBottom variant="p" component="div" color="white">
              your artwork is uniquely labeled.
            </Typography>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col xs={6}>
              <Image
                src="https://images.unsplash.com/photo-1617791116959-f09c8987a947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fG5mdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                fluid
              />
            </Col>
            <Col xs={6}>
              <br />
              <br />
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                color="#61fbda"
                fontWeight="bolder"
                textAlign="left"
              >
                `NO MATTER WHEREVER YOU´RE SITTING SELL YOUR NFT´S NOW`.
              </Typography>
              <Typography
                textAlign="left"
                gutterBottom
                variant="p"
                component="div"
                color="white"
              >
                CONTRARY TO POPULAR BELIEF, LOREM IPSUM IS NOT SIMPLY RANDOM
                TEXT. IT HAS ROOTS IN A PIECE OF CLASSICAL LATIN LITERATURE FROM
                45 BC, MAKING IT OVER 2000 YEARS OLD. RICHARD MCCLINTOCK, A
                LATIN PROFESSOR
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
            SAMPLES OF SOME TOP SELLERS.
          </Typography>
          <br />
          <Row xs={1} md={2} lg={3} className="g-2">
            <Col>
              <ImgMediaCard
                img={
                  "https://images.unsplash.com/photo-1530100914167-73e7602b004c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM4fHxhYnN0cmFjdHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
                name="001 ELLAN KARA"
              />
              <br />
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                color="white"
              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReBDRnDct05PYiF9eaIGCvvu2LVBVhG-3r8Q&usqp=CAU"
                  />
                </StyledBadge>
                &nbsp; Burak
              </Typography>
            </Col>
            <Col>
              <ImgMediaCard
                img={
                  "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFic3RyYWN0fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
                name="001 ELLAN KARA"
              />
              <br />
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                color="white"
              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0aqzWHipXRZtD3a338XEKjvz7i7D0bi_31A&usqp=CAU"
                  />
                </StyledBadge>
                &nbsp;
                Burak
              </Typography>
            </Col>

            <Col>
              <ImgMediaCard
                img={
                  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGFic3RyYWN0fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
                name="001 ELLAN KARA"
              />
              <br />
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                color="white"
              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn65EoPaaxyC01XxO0kKNXtVgQUkFYMSj9LA&usqp=CAU"
                  />
                </StyledBadge>
                &nbsp;
                Burak
              </Typography>
            </Col>
            <Col>
              <ImgMediaCard
                img={
                  "https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGFic3RyYWN0fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
                name="001 ELLAN KARA"
              />
              <br />
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                color="white"
              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
                  />
                </StyledBadge>
                &nbsp;
                Burak
              </Typography>
            </Col>

            <Col>
              <ImgMediaCard
                img={
                  "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGFic3RyYWN0fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
                name="001 ELLAN KARA"
              />
              <br />
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                color="white"
              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLIySS0D_jSgSTjCJKVIC5rZUjYoBMM1POLA&usqp=CAU"
                  />
                </StyledBadge>
                &nbsp;
                Burak
              </Typography>
            </Col>
            <Col>
              <ImgMediaCard
                img={
                  "https://images.unsplash.com/photo-1586032788085-d75f745f26e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGFic3RyYWN0fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
                name="001 ELLAN KARA"
              />
              <br />
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                color="white"
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
                &nbsp;
                Burak
              </Typography>
            </Col>
            <Col>
              <ImgMediaCard
                img={
                  "https://images.unsplash.com/photo-1533208087231-c3618eab623c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGFic3RyYWN0fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
                name="001 ELLAN KARA"
              />
              <br />
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                color="white"
              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoJmrvWaNmVk6aIb88bOXyUbarMlIbprpdCw&usqp=CAU"
                  />
                </StyledBadge>
                &nbsp;
                Burak
              </Typography>
            </Col>

            <Col>
              <ImgMediaCard
                img={
                  "https://images.unsplash.com/photo-1420442442888-15c96323ec3c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGFic3RyYWN0fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
                name="001 ELLAN KARA"
              />
              <br />
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                color="white"
              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3i_qZtrjSgoPCyIOywhlX8MKOzRIaQbKU0A&usqp=CAU"
                  />
                </StyledBadge>
                &nbsp;
                Burak
              </Typography>
            </Col>

            <Col>
              <ImgMediaCard
                img={
                  "https://images.unsplash.com/photo-1519017524945-ed31bb7a3786?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGFic3RyYWN0fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
                name="001 ELLAN KARA"
              />
              <br />
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                color="white"

              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUEDMmzFKbCzk3V64z4m5BgXRTJvMKHhXXg&usqp=CAU"
                  />
                </StyledBadge>
                &nbsp;
                Burak
              </Typography>
            </Col>
          </Row>
        </Container>
      </main>
      <br />
      <br />
      <br />
    </ThemeProvider>
  );
}
