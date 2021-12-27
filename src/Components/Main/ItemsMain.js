/* eslint-disable-next-line */
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import one from "../../Images/1.png";
import {
  getIsApprovedForAll,
  getNftCollectionName,
  getNftImageUrl,
  uploadNft,
} from "../../libs/apis";
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
        <CardMedia
          component="img"
          height="240"
          image={img}
          alt="green iguana"
        />
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

  const [nftImageUrlOne, setNftImageUrlOne] = useState("Loading..."); // eslint-disable-next-line

  const [imageObjOne, setImageObjOne] = useState("Loading...");

  const [nftCollectionNameTwo, setNftCollectionNameTwo] =
    useState("Loading...");

  const [nftImageUrlTwo, setNftImageUrlTwo] = useState("Loading..."); // eslint-disable-next-line

  const [imageObjTwo, setImageObjTwo] = useState("Loading...");

  const [nftCollectionNameThree, setNftCollectionNameThree] =
    useState("Loading...");

  const [nftImageUrlThree, setNftImageUrlThree] = useState("Loading..."); // eslint-disable-next-line

  const [imageObjThree, setImageObjThree] = useState("Loading...");

  const [nftCollectionNameFor, setNftCollectionNameFor] =
    useState("Loading...");

  const [nftImageUrlFor, setNftImageUrlFor] = useState("Loading..."); // eslint-disable-next-line

  const [imageObjFor, setImageObjFor] = useState("Loading...");

  const [nftCollectionNamefiv, setNftCollectionNamefiv] =
    useState("Loading...");

  const [nftImageUrlfiv, setNftImageUrlfiv] = useState("Loading..."); // eslint-disable-next-line

  const [imageObjfiv, setImageObjfiv] = useState("Loading...");

  const [nftCollectionNameSix, setNftCollectionNameSix] =
    useState("Loading...");

  const [nftImageUrlSix, setNftImageUrlSix] = useState("Loading..."); // eslint-disable-next-line

  const [imageObjSix, setImageObjSix] = useState("Loading...");

  const [nftCollectionNameSeven, setNftCollectionNameSeven] =
    useState("Loading...");

  const [nftImageUrlSeven, setNftImageUrlSeven] = useState("Loading..."); // eslint-disable-next-line

  const [imageObjSeven, setImageObjSeven] = useState("Loading...");

  const [nftCollectionNameEeight, setNftCollectionNameEeight] =
    useState("Loading...");

  const [nftImageUrlEeight, setNftImageUrlEeight] = useState("Loading..."); // eslint-disable-next-line

  const [imageObjEeight, setImageObjEeight] = useState("Loading...");

  const [nftCollectionNameNine, setNftCollectionNameNine] =
    useState("Loading...");

  const [nftImageUrlNine, setNftImageUrlNine] = useState("Loading..."); // eslint-disable-next-line

  const [imageObjNine, setImageObjNine] = useState("Loading...");

  const [isApprovedForAll, setIsApprovedForAll] = useState(false); // eslint-disable-next-line
  const [loading, setLoading] = useState(false); // eslint-disable-next-line
  console.log({
    isApprovedForAll,
    nftImageUrlNine,
    nftImageUrlfiv,
    nftImageUrlFor,
    nftImageUrlEeight,
    nftImageUrlOne,
    nftImageUrlTwo,
    nftImageUrlSeven,
    nftImageUrlSix,
    nftImageUrlThree,
  });
  useEffect(() => {
    setLoading(false); // for remove warnings


    const fun2 = async () => {
     uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(urlNft, "1");
      setNftImageUrlOne(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjOne(img);
    };

    const fun3 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(urlNft, "2");
      setNftImageUrlTwo(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjTwo(img);
    };

    const fun4 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(urlNft, "3");
      setNftImageUrlThree(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjThree(img);
    };

    const fun5 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(urlNft, "4");
      setNftImageUrlFor(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjFor(img);
    };

    const fun6 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(urlNft, "5");
      setNftImageUrlfiv(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjfiv(img);
    };

    const fun7 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(urlNft, "6");
      setNftImageUrlSix(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjSix(img);
    };

    const fun8 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(urlNft, "7");
      setNftImageUrlSeven(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjSeven(img);
    };

    const fun9 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(urlNft, "8");
      setNftImageUrlEeight(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjEeight(img);
    };
    const fun10 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(urlNft, "9");
      setNftImageUrlNine(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjNine(img);
    };

    // getNftCollectionName(urlNft).then(setNftCollectionName);
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

    getIsApprovedForAll(urlNft).then(setIsApprovedForAll);

    fun2();
    fun3();
    fun4();
    fun5();
    fun6();
    fun7();
    fun8();
    fun9();
    fun10();
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
