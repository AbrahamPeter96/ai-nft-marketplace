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
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import one from "../../Images/1.png";
import two from "../../Images/2.png";
import three from "../../Images/3.png";
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
} from "../../libs/apis";
import { urlNft, urlTokenId } from "../../libs/utils";

const responsive = {
  superLargeDesktop: {
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
          height="350"
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

export default function Album() {
  const [nftCollectionName, setNftCollectionName] = useState("Loading...");
  const [nftImageUrl, setNftImageUrl] = useState("Loading...");
  const [imageObj, setImageObj] = useState("Loading...");
  const [isApprovedForAll, setIsApprovedForAll] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(nftImageUrl)
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
       uploadNft(setLoading, await (await fetch(one)).blob());

      const url = await getNftImageUrl(urlNft, urlTokenId);
      setNftImageUrl(url);
      const laser = await fetch(url);
      const img = URL.createObjectURL(await laser.blob());
      setImageObj(img);
      
    };

    getNftCollectionName(urlNft).then(setNftCollectionName);
    getIsApprovedForAll(urlNft).then(setIsApprovedForAll);

    fun1();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <main>
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col xs={6}>
              <ActionAreaCard img={imageObj} title={nftCollectionName} />
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
                {nftCollectionName} &nbsp;#{urlTokenId}
              </Typography>
              <Typography
                textAlign="left"
                color="#ccc"
                gutterBottom
                variant="p"
                component="div"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem text of the printing and typesetting industry{" "}
               
              </Typography>
              {/* <input
                type='file'
                value={selectedFile}
                onChange={e => {
                  // for testing only
                  0 && uploadNft(setLoading, e.target.files[0]);
                  0 && setSelectedFile(e.target.files[0]);
                }}
              /> */}
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
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                color="#fff"
                fontWeight="bolder"
                textAlign="left"
              >
                {/* {nftImageUrl} */}
                {!isApprovedForAll && (
                  <Button
                    style={{
                      backgroundColor: "#00e8c9",
                      width: 120,
                      height: 40,
                      borderRadius: "20px",
                      color: "white",
                    }}
                    onClick={() => {
                      approveMarketplaceContract(() => {}, urlNft);
                    }}
                  >
                    Approve
                  </Button>
                )}
               
                &nbsp;
                <Button
                  style={{
                    backgroundColor: "#00e8c9",
                    width: 120,
                    height: 40,
                    borderRadius: "20px",
                    color: "white",
                  }}
                  onClick={() => {
                    sellNft(
                      () => {},
                      urlNft,
                      urlTokenId,
                      prompt("Please enter NFT price in BNB", "0.1")
                    );
                  }}
                >
                  Sell
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
                  Bid {false && loading /* just to remove warnings*/}
                </Button>
              </Typography>
              {!isApprovedForAll && (
                   <Typography
                   gutterBottom
                   variant="h3"
                   component="div"
                   color="#fff"
                   fontWeight="bolder"
                   textAlign="left"
                 >
                       <Button
                       style={{
                         backgroundColor: "#00e8c9",
                         width: 120,
                         height: 40,
                         borderRadius: "20px",
                         color: "white",
                       }}
                     >
                       Buy NFT {false && loading /* just to remove warnings*/}
                     </Button>
                   </Typography>
                )}
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                color="#fff"
                fontWeight="bolder"
                textAlign="left"
              >
                {/* {nftImageUrl} */}
                {!isApprovedForAll && (
                  <Button
                    style={{
                      backgroundColor: "#00e8c9",
                      width: 120,
                      height: 40,
                      borderRadius: "20px",
                      color: "white",
                    }}
                  >
                    Stake
                  </Button>
                )}
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
                  UnStake
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
                  Harvest {false && loading /* just to remove warnings*/}
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
          </Carousel>
        </Container>
      </main>
      <br />
      <br />
      <br />
    </ThemeProvider>
  );
}
