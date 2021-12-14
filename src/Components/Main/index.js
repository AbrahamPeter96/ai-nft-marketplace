import  React,{useState,useEffect} from "react";
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
import {Link} from "react-router-dom"
// import Container from "@mui/material/Container";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
// import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import one from "../../Images/1.png";
import two from "../../Images/2.png";
import three from "../../Images/3.png";
import {nftCollections} from "../../collections"
import {
  approveMarketplaceContract,
  approveStakingContract,
  buyNft,
  createNftAuction,
  getIsApprovedForAll,
  getNftCollectionName,
  getNftImageUrl,
  getNftOwner,
  harvestNft,
  makeBid,
  sellNft,
  stakeNft,
  takeHighestBid,
  unstakeNft,
  uploadNft,
} from '../../libs/apis';
import { urlNft, urlTokenId } from '../../libs/utils';

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
      <Link to="/detail">
        <CardMedia
          component="img"
          height="240"
          image={img}
          alt="green iguana"
        />
        </Link>
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

  const [nftCollectionName, setNftCollectionName] = useState('Loading...');

  const [nftImageUrl, setNftImageUrl] = useState('Loading...');

  const [imageObj, setImageObj] = useState('Loading...');

  

  const [nftCollectionNameOne, setNftCollectionNameOne] = useState('Loading...');

  const [nftImageUrlOne, setNftImageUrlOne] = useState('Loading...');

  const [imageObjOne, setImageObjOne] = useState('Loading...');


  const [nftCollectionNameTwo, setNftCollectionNameTwo] = useState('Loading...');

  const [nftImageUrlTwo, setNftImageUrlTwo] = useState('Loading...');

  const [imageObjTwo, setImageObjTwo] = useState('Loading...');


  const [nftCollectionNameThree, setNftCollectionNameThree] = useState('Loading...');

  const [nftImageUrlThree, setNftImageUrlThree] = useState('Loading...');

  const [imageObjThree, setImageObjThree] = useState('Loading...');


  const [nftCollectionNameFor, setNftCollectionNameFor] = useState('Loading...');

  const [nftImageUrlFor, setNftImageUrlFor] = useState('Loading...');

  const [imageObjFor, setImageObjFor] = useState('Loading...');


  const [nftCollectionNamefiv, setNftCollectionNamefiv] = useState('Loading...');

  const [nftImageUrlfiv, setNftImageUrlfiv] = useState('Loading...');

  const [imageObjfiv, setImageObjfiv] = useState('Loading...');


  const [nftCollectionNameSix, setNftCollectionNameSix] = useState('Loading...');

  const [nftImageUrlSix, setNftImageUrlSix] = useState('Loading...');

  const [imageObjSix, setImageObjSix] = useState('Loading...');


  const [nftCollectionNameSeven, setNftCollectionNameSeven] = useState('Loading...');

  const [nftImageUrlSeven, setNftImageUrlSeven] = useState('Loading...');

  const [imageObjSeven, setImageObjSeven] = useState('Loading...');


  const [nftCollectionNameEeight, setNftCollectionNameEeight] = useState('Loading...');

  const [nftImageUrlEeight, setNftImageUrlEeight] = useState('Loading...');

  const [imageObjEeight, setImageObjEeight] = useState('Loading...');


  const [nftCollectionNameNine, setNftCollectionNameNine] = useState('Loading...');

  const [nftImageUrlNine, setNftImageUrlNine] = useState('Loading...');

  const [imageObjNine, setImageObjNine] = useState('Loading...');


  const [isApprovedForAll, setIsApprovedForAll] = useState(false);
  const [loading, setLoading] = useState(false);
  // show loader on isLoading
  const [selectedFile, setSelectedFile] = useState(null);
  const [nftUrl,setNftUrl ] = useState(null)

  useEffect(() => {
    setLoading(false); // for remove warnings
    // test apis
    0 && buyNft(setLoading, urlNft, urlTokenId, '0.1'); // 0.1 BNB

    // http://localhost:3000/detail/0x16951a59f9d62a2ff70fbe7fccfc0dfb1d61acc4/8
    0 && createNftAuction(setLoading, urlNft, urlTokenId, '0.1');

    // working
    // http://localhost:3000/detail/0x16951a59f9d62a2ff70fbe7fccfc0dfb1d61acc4/8
    0 && takeHighestBid(setLoading, urlNft, urlTokenId);

    0 && makeBid(setLoading, urlNft, urlTokenId, '0.1');
    0 && stakeNft(setLoading, urlNft, urlTokenId);
    0 && unstakeNft(setLoading, urlNft, urlTokenId);
    0 && harvestNft(setLoading, urlNft);
    0 && approveStakingContract(setLoading, urlNft);
    
    // read apis
    0 && getNftOwner(urlNft, urlTokenId);

    const fun1 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(nftCollections[0], '8');
      setNftImageUrl(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObj(img);
    };
    
    const fun2 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(nftCollections[1], '8');
      setNftImageUrlOne(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjOne(img);
    };

    const fun3 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(nftCollections[1], '8');
      setNftImageUrlTwo(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjTwo(img);
    };

    const fun4 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(nftCollections[3], '8');
      setNftImageUrlThree(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setNftImageUrlThree(img);
    };

    const fun5 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(nftCollections[1], '8');
      setNftImageUrlFor(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjFor(img);
    };

    const fun6 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(nftCollections[1], '8');
      setNftImageUrlfiv(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjfiv(img);
    };

    const fun7 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(nftCollections[1], '8');
      setNftImageUrlSix(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjSix(img);
    };

    const fun8 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(nftCollections[1], '8');
      setNftImageUrlSeven(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjSeven(img);
    };

    const fun9 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(nftCollections[1], '8');
      setNftImageUrlEeight(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObjEeight(img);
    };
    const fun10 = async () => {
      0 && uploadNft(setLoading, await (await fetch(one)).blob());

      // const url = await getNftImageUrl(urlNft, urlTokenId);
      const url = await getNftImageUrl(nftCollections[1], '8');
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

    fun1()
    fun2()
    fun3()
    fun4()
    fun5()
    fun6()
    fun7()
    fun8()
    fun9()
    fun10()
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
          {/* {nftCollections.map((nft,i)=>{
            setNftUrl(nft) */}
            {/* // <div key={i}> */}
            <Col>
            <ActionAreaCard img={imageObj} title={nftCollectionName} />
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionName}
            </Typography>
          </Col>
            <Col>
            <ActionAreaCard img={imageObjOne} title={nftCollectionNameOne} />
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNameOne}
            </Typography>
          </Col>
            <Col>
            <ActionAreaCard img={imageObjTwo} title={nftCollectionNameTwo} />
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNameTwo}
            </Typography>
          </Col>
            <Col>
            <ActionAreaCard img={imageObjThree} title={nftCollectionNameThree} />
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNameThree}
            </Typography>
          </Col>
            <Col>
            <ActionAreaCard img={imageObjFor} title={nftCollectionNameFor} />
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNameFor}
            </Typography>
          </Col>
          <Col>
            <ActionAreaCard img={imageObjfiv} title={nftCollectionNamefiv} />
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNamefiv}
            </Typography>
          </Col>
          <Col>
            <ActionAreaCard img={imageObjSix} title={nftCollectionNameSix} />
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNameSix}
            </Typography>
          </Col>
          <Col>
            <ActionAreaCard img={imageObjSeven} title={nftCollectionNameSeven} />
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNameSeven}
            </Typography>
          </Col>
          <Col>
            <ActionAreaCard img={imageObjEeight} title={nftCollectionNameEeight} />
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNameEeight}
            </Typography>
          </Col>
          <Col>
            <ActionAreaCard img={imageObjNine} title={nftCollectionNameNine} />
            <br />
            <Typography gutterBottom variant="h6" component="div" color="white">
              {nftCollectionNameNine}
            </Typography>
          </Col>
          {/* </div> */}
          {/* })} */}

          {/* <Col>
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
          </Col> */}



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
