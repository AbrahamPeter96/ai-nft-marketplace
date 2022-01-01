/* eslint-disable-next-line */
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getNftCollectionName, getNftImage } from "../../libs/apis";
import { urlNft } from "../../libs/utils";

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
        <CardMedia component="img" height="240" image={img} alt="Azimuth" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {des}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function Items() {
  const [nftCollectionNameOne, setNftCollectionNameOne] =
    useState("Loading...");

  const [imageObjOne, setImageObjOne] = useState("Loading...");

  const [nftCollectionNameTwo, setNftCollectionNameTwo] =
    useState("Loading...");

  const [imageObjTwo, setImageObjTwo] = useState("Loading...");

  const [nftCollectionNameThree, setNftCollectionNameThree] =
    useState("Loading...");

  const [imageObjThree, setImageObjThree] = useState("Loading...");

  const [nftCollectionNameFor, setNftCollectionNameFor] =
    useState("Loading...");

  const [imageObjFor, setImageObjFor] = useState("Loading...");

  const [nftCollectionNamefiv, setNftCollectionNamefiv] =
    useState("Loading...");

  const [imageObjfiv, setImageObjfiv] = useState("Loading...");

  const [nftCollectionNameSix, setNftCollectionNameSix] =
    useState("Loading...");

  const [imageObjSix, setImageObjSix] = useState("Loading...");

  const [nftCollectionNameSeven, setNftCollectionNameSeven] =
    useState("Loading...");

  const [imageObjSeven, setImageObjSeven] = useState("Loading...");

  const [nftCollectionNameEeight, setNftCollectionNameEeight] =
    useState("Loading...");

  const [imageObjEeight, setImageObjEeight] = useState("Loading...");

  const [nftCollectionNameNine, setNftCollectionNameNine] =
    useState("Loading...");

  const [imageObjNine, setImageObjNine] = useState("Loading...");

  useEffect(() => {
    // getNftImage(urlNft, urlTokenId).then(setImageObj);

    getNftImage(urlNft, "1").then(setImageObjOne);
    getNftImage(urlNft, "2").then(setImageObjTwo);
    getNftImage(urlNft, "3").then(setImageObjThree);
    getNftImage(urlNft, "4").then(setImageObjFor);
    getNftImage(urlNft, "5").then(setImageObjfiv);
    getNftImage(urlNft, "6").then(setImageObjSix);
    getNftImage(urlNft, "7").then(setImageObjSeven);
    getNftImage(urlNft, "8").then(setImageObjEeight);
    getNftImage(urlNft, "9").then(setImageObjNine);

    // getNftCollectionName(urlNft).then(setNftCollectionName);
    getNftCollectionName(urlNft).then(setNftCollectionNameOne);
    getNftCollectionName(urlNft).then(setNftCollectionNameTwo);
    getNftCollectionName(urlNft).then(setNftCollectionNameThree);
    getNftCollectionName(urlNft).then(setNftCollectionNameFor);
    getNftCollectionName(urlNft).then(setNftCollectionNamefiv);
    getNftCollectionName(urlNft).then(setNftCollectionNameSix);
    getNftCollectionName(urlNft).then(setNftCollectionNameSeven);
    getNftCollectionName(urlNft).then(setNftCollectionNameEeight);
    getNftCollectionName(urlNft).then(setNftCollectionNameNine);
  }, []);
  return (
    <ThemeProvider theme={theme}>
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
          {/* <Col>
            <Link to={`/detail/${urlNft}/1`} target="_blank">
              <ActionAreaCard img={imageObj} title={nftCollectionName} />
            </Link>
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionName}
            </Typography>
          </Col> */}
          <Col>
            <Link to={`/detail/${urlNft}/1`} target="_blank">
              <ActionAreaCard img={imageObjOne} title={nftCollectionNameOne} />
            </Link>
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNameOne} #1
            </Typography>
          </Col>
          <Col>
            <Link to={`/detail/${urlNft}/2`} target="_blank">
              <ActionAreaCard img={imageObjTwo} title={nftCollectionNameTwo} />
            </Link>
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNameTwo} #2
            </Typography>
          </Col>
          <Col>
            <Link to={`/detail/${urlNft}/3`} target="_blank">
              <ActionAreaCard
                img={imageObjThree}
                title={nftCollectionNameThree}
              />
            </Link>
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNameThree} #3
            </Typography>
          </Col>
          <Col>
            <Link to={`/detail/${urlNft}/4`} target="_blank">
              <ActionAreaCard img={imageObjFor} title={nftCollectionNameFor} />
            </Link>
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNameFor} #4
            </Typography>
          </Col>
          <Col>
            <Link to={`/detail/${urlNft}/5`} target="_blank">
              <ActionAreaCard img={imageObjfiv} title={nftCollectionNamefiv} />
            </Link>
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNamefiv} #5
            </Typography>
          </Col>
          <Col>
            <Link to={`/detail/${urlNft}/6`} target="_blank">
              <ActionAreaCard img={imageObjSix} title={nftCollectionNameSix} />
            </Link>
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNameSix} #6
            </Typography>
          </Col>
          <Col>
            <Link to={`/detail/${urlNft}/7`} target="_blank">
              <ActionAreaCard
                img={imageObjSeven}
                title={nftCollectionNameSeven}
              />
            </Link>
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNameSeven} #7
            </Typography>
          </Col>
          <Col>
            <Link to={`/detail/${urlNft}/8`} target="_blank">
              <ActionAreaCard
                img={imageObjEeight}
                title={nftCollectionNameEeight}
              />
            </Link>
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNameEeight} #8
            </Typography>
          </Col>
          <Col>
            <Link to={`/detail/${urlNft}/9`} target="_blank">
              <ActionAreaCard
                img={imageObjNine}
                title={nftCollectionNameNine}
              />
            </Link>
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNameNine} #9
            </Typography>
          </Col>
        </Row>
      </main>
      <br />
      <br />
      <br />
    </ThemeProvider>
  );
}
