import { CardActionArea } from "@mui/material";
// import Avatar from "@mui/material/Avatar";
// import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles"; // {styled}
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { fromWei } from "web3-utils";
import one from "../../Images/1.png";
import two from "../../Images/2.png";
import three from "../../Images/3.png";
import {
  approveBidingContract,
  approveStakingContract,
  buyNft,
  getAuction,
  getIsApprovedForAll,
  getIsApprovedForAllStaking,
  getNftCollectionName,
  getNftImage,
  getNftOwner,
  getNftStakeReward,
  getUserAddr,
  harvestNft,
  listToSell,
  makeBid,
  stakeNft,
  takeHighestBid,
  unstakeNft,
} from "../../libs/apis";
import { displayAddr, urlNft, urlTokenId } from "../../libs/utils";

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
// const StyledBadge = styled(Badge)(({ theme }) => ({
//   "& .MuiBadge-badge": {
//     backgroundColor: "#44b700",
//     color: "#44b700",
//     boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//     "&::after": {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       borderRadius: "50%",
//       animation: "ripple 1.2s infinite ease-in-out",
//       border: "1px solid currentColor",
//       content: '""',
//     },
//   },
//   "@keyframes ripple": {
//     "0%": {
//       transform: "scale(.8)",
//       opacity: 1,
//     },
//     "100%": {
//       transform: "scale(2.4)",
//       opacity: 0,
//     },
//   },
// }));

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
  const [loading, setLoading] = useState(false);

  const [nftCollectionName, setNftCollectionName] = useState("Loading...");
  const [imageObj, setImageObj] = useState("Loading...");

  const [nftStakeReward, setNftStakeReward] = useState();

  const [isApprovedForAll, setIsApprovedForAll] = useState(false); // buy sell bid contract
  const [isApprovedForAllStaking, setIsApprovedForAllStaking] = useState(false);

  // view related, to clear concept
  const [userAddr, setUserAddr] = useState();
  const [nftOwner, setNftOwner] = useState();

  // it contains many things
  const [auction, setAuction] = useState();

  console.log("aoa");

  // refresh reward every second
  setInterval(() => {
    getNftStakeReward(urlNft).then(setNftStakeReward);
  }, 1000);

  // load data on startup
  useEffect(() => {
    setLoading(false); // for removing warnings

    getNftImage(urlNft, urlTokenId).then(setImageObj);

    getNftCollectionName(urlNft).then(setNftCollectionName);

    getIsApprovedForAll(urlNft).then(setIsApprovedForAll);
    getIsApprovedForAllStaking(urlNft).then(setIsApprovedForAllStaking);

    getNftStakeReward(urlNft).then(setNftStakeReward);

    getNftOwner(urlNft, urlTokenId).then(setNftOwner);
    getUserAddr().then(setUserAddr);

    getAuction(urlNft, urlTokenId).then(setAuction);
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
                {auction && `Min Price ${fromWei(auction.minPrice)} BNB`}
              </Typography>
              <Typography
                textAlign="left"
                color="#ccc"
                gutterBottom
                variant="p"
                component="div"
              >
                {auction && `Buy Now Price ${fromWei(auction.buyNowPrice)} BNB`}
              </Typography>

              <Typography
                textAlign="left"
                color="#ccc"
                gutterBottom
                variant="p"
                component="div"
              >
                {auction && `Highest Bid ${fromWei(auction.nftHighestBid)} BNB`}
              </Typography>
              <Typography
                textAlign="left"
                color="#ccc"
                gutterBottom
                variant="p"
                component="div"
              >
                {nftOwner && `Owned by ${displayAddr(nftOwner, userAddr)}`}
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
              {/* <Typography
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
              </Typography> */}
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                color="#fff"
                fontWeight="bolder"
                textAlign="left"
              >
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
                      approveBidingContract(() => {
                        // getIsApprovedForAll(urlNft).then(setIsApprovedForAll); // (done &&) later
                      }, urlNft);
                    }}
                  >
                    Approve Bid
                  </Button>
                )}
                {isApprovedForAll && (
                  <Button
                    style={{
                      backgroundColor: "#00e8c9",
                      width: 120,
                      height: 40,
                      borderRadius: "20px",
                      color: "white",
                    }}
                    onClick={() => {
                      listToSell(
                        () => {
                          getNftOwner(urlNft, urlTokenId).then(setNftOwner);
                        },
                        urlNft,
                        urlTokenId,
                        prompt("Please enter price in BNB", "0.1"),
                      );
                    }}
                  >
                    List to Sell
                  </Button>
                )}
                &nbsp;
                {isApprovedForAll && (
                  <Button
                    style={{
                      backgroundColor: "#00e8c9",
                      width: 120,
                      height: 40,
                      borderRadius: "20px",
                      color: "white",
                    }}
                    onClick={() => {
                      makeBid(
                        setLoading,
                        urlNft,
                        urlTokenId,
                        prompt("Please enter NFT price in BNB", "0.1"),
                      );
                    }}
                  >
                    Bid {false && loading /* just to remove warnings*/}
                  </Button>
                )}
                &nbsp;
                {isApprovedForAll && (
                  <Button
                    style={{
                      backgroundColor: "#00e8c9",
                      width: 120,
                      height: 40,
                      borderRadius: "20px",
                      color: "white",
                    }}
                    onClick={() => {
                      takeHighestBid(setLoading, urlNft, urlTokenId);
                    }}
                  >
                    Accept Bid{" "}
                  </Button>
                )}
                &nbsp;
                {isApprovedForAll && (
                  <Button
                    style={{
                      backgroundColor: "#00e8c9",
                      width: 120,
                      height: 40,
                      borderRadius: "20px",
                      color: "white",
                    }}
                    onClick={() => {
                      buyNft(() => {}, urlNft, urlTokenId);
                    }}
                  >
                    Buy NFT
                  </Button>
                )}
              </Typography>

              <Typography
                gutterBottom
                variant="h6"
                component="div"
                color="#fff"
                textAlign="left"
              >
                Staking
              </Typography>

              <Typography
                textAlign="left"
                color="#ccc"
                gutterBottom
                variant="p"
                component="div"
              >
                {nftStakeReward &&
                  fromWei(nftStakeReward) !== "0" &&
                  `Reward ${fromWei(nftStakeReward)} AZI`}
              </Typography>

              <Typography
                gutterBottom
                variant="h3"
                component="div"
                color="#fff"
                fontWeight="bolder"
                textAlign="left"
              >
                {!isApprovedForAllStaking && (
                  <Button
                    style={{
                      backgroundColor: "#00e8c9",
                      width: 120,
                      height: 40,
                      borderRadius: "20px",
                      color: "white",
                    }}
                    onClick={() => {
                      approveStakingContract(() => {
                        getIsApprovedForAllStaking(urlNft).then(
                          setIsApprovedForAllStaking,
                        );
                      }, urlNft);
                    }}
                  >
                    Approve
                  </Button>
                )}
                {isApprovedForAllStaking && (
                  <Button
                    style={{
                      backgroundColor: "#00e8c9",
                      width: 120,
                      height: 40,
                      borderRadius: "20px",
                      color: "white",
                    }}
                    onClick={() => {
                      stakeNft(
                        () => {
                          // getIsApprovedForAllStaking(urlNft).then(setIsApprovedForAllStaking);
                          getNftOwner(urlNft, urlTokenId).then(setNftOwner);
                        },
                        urlNft,
                        urlTokenId,
                      );
                    }}
                  >
                    Stake
                  </Button>
                )}
                &nbsp;
                {isApprovedForAllStaking && (
                  <Button
                    style={{
                      backgroundColor: "#00e8c9",
                      width: 120,
                      height: 40,
                      borderRadius: "20px",
                      color: "white",
                    }}
                    onClick={() => {
                      unstakeNft(
                        () => {
                          // getIsApprovedForAllStaking(urlNft).then(setIsApprovedForAllStaking);
                          getNftOwner(urlNft, urlTokenId).then(setNftOwner);
                        },
                        urlNft,
                        urlTokenId,
                      );
                    }}
                  >
                    UnStake
                  </Button>
                )}
                &nbsp;
                {isApprovedForAllStaking && (
                  <Button
                    style={{
                      backgroundColor: "#00e8c9",
                      width: 120,
                      height: 40,
                      borderRadius: "20px",
                      color: "white",
                    }}
                    onClick={() => {
                      harvestNft(() => {}, urlNft);
                    }}
                  >
                    Harvest
                  </Button>
                )}
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

/*
// Test all apis on front end, pure functions are better
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

    0 && getNftStakeReward(urlNft);

      0 && uploadNft(setLoading, await (await fetch(one)).blob());

},[]);

*/
