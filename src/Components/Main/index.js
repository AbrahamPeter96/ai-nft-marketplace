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
import { nftCollections } from "../../collections";
import {
  approveStakingContract,
  buyNft,
  createNftAuction,
  getIsApprovedForAll,
  getNftCollectionName,
  getNftImageUrl,
  getNftOwner,
  harvestNft,
  makeBid,
  stakeNft,
  takeHighestBid,
  unstakeNft,
  uploadNft,
} from "../../libs/apis";
import { urlNft, urlTokenId } from "../../libs/utils";

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

export default function Album() {
  const [nftCollectionName, setNftCollectionName] = useState("Loading...");

  const [nftImageUrl, setNftImageUrl] = useState("Loading..."); // eslint-disable-next-line

  const [imageObj, setImageObj] = useState("Loading...");

  const [nftCollectionNameOne, setNftCollectionNameOne] =
    useState("Loading...");

  const [nftImageUrlOne, setNftImageUrlOne] = useState("Loading..."); // eslint-disable-next-line

  const [imageObjOne, setImageObjOne] = useState("Loading...");

  const [nftCollectionNameTwo, setNftCollectionNameTwo] =
    useState("Loading...");

  const [nftImageUrlTwo, setNftImageUrlTwo] = useState("Loading...");

  const [imageObjTwo, setImageObjTwo] = useState("Loading...");

  const [nftCollectionNameThree, setNftCollectionNameThree] =
    useState("Loading...");

  const [nftImageUrlThree, setNftImageUrlThree] = useState("Loading...");

  const [imageObjThree, setImageObjThree] = useState("Loading...");

  const [nftCollectionNameFor, setNftCollectionNameFor] =
    useState("Loading...");

  const [nftImageUrlFor, setNftImageUrlFor] = useState("Loading...");

  const [imageObjFor, setImageObjFor] = useState("Loading...");

  const [nftCollectionNamefiv, setNftCollectionNamefiv] =
    useState("Loading...");

  const [nftImageUrlfiv, setNftImageUrlfiv] = useState("Loading...");

  const [imageObjfiv, setImageObjfiv] = useState("Loading...");

  const [nftCollectionNameSix, setNftCollectionNameSix] =
    useState("Loading...");

  const [nftImageUrlSix, setNftImageUrlSix] = useState("Loading...");

  const [imageObjSix, setImageObjSix] = useState("Loading...");

  const [nftCollectionNameSeven, setNftCollectionNameSeven] =
    useState("Loading...");

  const [nftImageUrlSeven, setNftImageUrlSeven] = useState("Loading...");

  const [imageObjSeven, setImageObjSeven] = useState("Loading...");

  const [nftCollectionNameEeight, setNftCollectionNameEeight] =
    useState("Loading...");

  const [nftImageUrlEeight, setNftImageUrlEeight] = useState("Loading...");

  const [imageObjEeight, setImageObjEeight] = useState("Loading...");

  const [nftCollectionNameNine, setNftCollectionNameNine] =
    useState("Loading...");

  const [nftImageUrlNine, setNftImageUrlNine] = useState("Loading...");

  const [imageObjNine, setImageObjNine] = useState("Loading...");

  const [isApprovedForAll, setIsApprovedForAll] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log({
    isApprovedForAll,
    nftImageUrlNine,
    nftImageUrlfiv,
    nftImageUrlFor,
    nftImageUrlEeight,
    nftImageUrl,
    nftImageUrlOne,
    nftImageUrlTwo,
    nftImageUrlSeven,
    nftImageUrlSix,
    nftImageUrlThree,
    loading,
  });

  useEffect(() => {
    setLoading(false); // for remove warnings
    // test apis
    0 && buyNft(setLoading, urlNft, urlTokenId, "0.1"); // 0.1 BNB

    // http://localhost:3000/detail/0x16951a59f9d62a2ff70fbe7fccfc0dfb1d61acc4/8
    0 && createNftAuction(setLoading, urlNft, urlTokenId, "0.1");

    // working
    // http://localhost:3000/detail/0x16951a59f9d62a2ff70fbe7fccfc0dfb1d61acc4/8
    0 && takeHighestBid(setLoading, urlNft, urlTokenId);

    0 && makeBid(setLoading, urlNft, urlTokenId, "0.1");
    0 && stakeNft(setLoading, urlNft, urlTokenId);
    0 && unstakeNft(setLoading, urlNft, urlTokenId);
    0 && harvestNft(setLoading, urlNft);
    0 && approveStakingContract(setLoading, urlNft);

    // read apis
    0 && getNftOwner(urlNft, urlTokenId);

    const fun1 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(nftCollections[0], "8");
      setNftImageUrl(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObj(img);
    };

    const fun2 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(nftCollections[1], "8");
      setNftImageUrlOne(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjOne(img);
    };

    const fun3 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(nftCollections[2], "8");
      setNftImageUrlTwo(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjTwo(img);
    };

    const fun4 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(nftCollections[3], "8");
      setNftImageUrlThree(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjThree(img);
    };

    const fun5 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(nftCollections[4], "8");
      setNftImageUrlFor(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjFor(img);
    };

    const fun6 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(nftCollections[5], "8");
      setNftImageUrlfiv(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjfiv(img);
    };

    const fun7 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(nftCollections[6], "8");
      setNftImageUrlSix(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjSix(img);
    };

    const fun8 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(nftCollections[7], "8");
      setNftImageUrlSeven(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjSeven(img);
    };

    const fun9 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(nftCollections[8], "8");
      setNftImageUrlEeight(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjEeight(img);
    };
    const fun10 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(nftCollections[9], "8");
      setNftImageUrlNine(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjNine(img);
    };

    // getNftCollectionName(urlNft).then(setNftCollectionName);
    getNftCollectionName(nftCollections[0]).then(setNftCollectionName);
    getNftCollectionName(nftCollections[1]).then(setNftCollectionNameOne);

    getNftCollectionName(nftCollections[2]).then(setNftCollectionNameTwo);

    getNftCollectionName(nftCollections[3]).then(setNftCollectionNameThree);

    getNftCollectionName(nftCollections[4]).then(setNftCollectionNameFor);

    getNftCollectionName(nftCollections[5]).then(setNftCollectionNamefiv);

    getNftCollectionName(nftCollections[6]).then(setNftCollectionNameSix);

    getNftCollectionName(nftCollections[7]).then(setNftCollectionNameSeven);

    getNftCollectionName(nftCollections[8]).then(setNftCollectionNameEeight);

    getNftCollectionName(nftCollections[9]).then(setNftCollectionNameNine);

    getIsApprovedForAll(urlNft).then(setIsApprovedForAll);

    fun1();
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
            <Link to={`/Collection/${nftCollections[0]}`} target="_blank">
              <ActionAreaCard img={imageObj} title={nftCollectionName} />
            </Link>
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionName}
            </Typography>
          </Col>
          <Col>
            <Link to={`/Collection/${nftCollections[1]}`} target="_blank">
              <ActionAreaCard img={imageObjOne} title={nftCollectionNameOne} />
            </Link>
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNameOne}
            </Typography>
          </Col>
          <Col>
            <Link to={`/Collection/${nftCollections[2]}`} target="_blank">
              <ActionAreaCard img={imageObjTwo} title={nftCollectionNameTwo} />
            </Link>
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNameTwo}
            </Typography>
          </Col>
          <Col>
            <Link to={`/Collection/${nftCollections[3]}`} target="_blank">
              <ActionAreaCard
                img={imageObjThree}
                title={nftCollectionNameThree}
              />
            </Link>
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNameThree}
            </Typography>
          </Col>
          <Col>
            <Link to={`/Collection/${nftCollections[4]}`} target="_blank">
              <ActionAreaCard img={imageObjFor} title={nftCollectionNameFor} />
            </Link>
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNameFor}
            </Typography>
          </Col>
          <Col>
            <Link to={`/Collection/${nftCollections[5]}`} target="_blank">
              <ActionAreaCard img={imageObjfiv} title={nftCollectionNamefiv} />
            </Link>
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNamefiv}
            </Typography>
          </Col>
          <Col>
            <Link to={`/Collection/${nftCollections[6]}`} target="_blank">
              <ActionAreaCard img={imageObjSix} title={nftCollectionNameSix} />
            </Link>
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNameSix}
            </Typography>
          </Col>
          <Col>
            <Link to={`/Collection/${nftCollections[7]}`} target="_blank">
              <ActionAreaCard
                img={imageObjSeven}
                title={nftCollectionNameSeven}
              />
            </Link>
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNameSeven}
            </Typography>
          </Col>
          <Col>
            <Link to={`/Collection/${nftCollections[8]}`} target="_blank">
              <ActionAreaCard
                img={imageObjEeight}
                title={nftCollectionNameEeight}
              />
            </Link>
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNameEeight}
            </Typography>
          </Col>
          <Col>
            <Link to={`/Collection/${nftCollections[9]}`} target="_blank">
              <ActionAreaCard
                img={imageObjNine}
                title={nftCollectionNameNine}
              />
            </Link>
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNameNine}
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
