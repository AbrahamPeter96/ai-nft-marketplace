import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Image } from "antd";
import * as React from "react";

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

// function MediaControlCardLeft({ name, img, des }) {
//   const theme = useTheme();

//   return (
//     <div
//       style={{
//         marginLeft: "auto",
//         marginRight: "auto",
//         alignItems: "center",
//         justifyContent: "center",
//         overflow: "hidden",
//       }}
//     >
//       <Card
//         sx={{
//           display: "flex",
//           background: "transparent",
//           maxWidth: 780,
//           marginLeft: "auto",
//           marginRight: "auto",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Box sx={{ display: "flex", flexDirection: "column" }}>
//           <CardContent sx={{ flex: "1 0 auto" }}>
//             <Typography
//               gutterBottom
//               variant="h5"
//               component="div"
//               color="#61fbda"
//               fontWeight="bolder"
//               textAlign="right"
//               align="right"
//             >
//               SOLUTION
//             </Typography>
//             <Typography
//               gutterBottom
//               variant="h6"
//               component="div"
//               color="white"
//               textAlign="right"
//               align="right"
//               fontWeight="bold"
//             >
//               it is a long established fact that a reader will be distracted.
//             </Typography>
//             <Typography
//               gutterBottom
//               variant="p"
//               component="div"
//               color="white"
//               textAlign="right"
//               align="right"
//             >
//               many desktop publishing packages and web page editors now use
//               lorem ipsum as their default model text, and a search for 'lorem
//               ipsum'
//             </Typography>
//           </CardContent>
//         </Box>
//         &nbsp; &nbsp;
//         <CardMedia
//           component="img"
//           sx={{
//             width: 191,
//             alignItems: "right",
//             height: 251,
//           }}
//           image={img}
//           alt="Live from space album cover"
//         />
//       </Card>
//     </div>
//   );
// }

// function MediaControlCardRight({ name, img, des }) {
//   const theme = useTheme();

//   return (
//     <div
//       style={{
//         marginLeft: "auto",
//         marginRight: "auto",
//         alignItems: "center",
//         justifyContent: "center",
//         overflow: "hidden",
//       }}
//     >
//       <Card
//         sx={{
//           display: "flex",
//           background: "transparent",
//           maxWidth: 780,
//           marginLeft: "auto",
//           marginRight: "auto",
//           alignItems: "center",
//           justifyContent: "center",
//           maxHeight: 680,
//         }}
//       >
//         <CardMedia
//           component="img"
//           sx={{
//             width: 191,
//             alignItems: "right",
//             height: 251,
//           }}
//           image={img}
//           alt="Live from space album cover"
//         />
//         &nbsp; &nbsp;
//         <Box sx={{ display: "flex", flexDirection: "column" }}>
//           <CardContent sx={{ flex: "1 0 auto" }}>
//             <Typography
//               gutterBottom
//               variant="h5"
//               component="div"
//               color="#61fbda"
//               fontWeight="bolder"
//               textAlign="left"
//               align="left"
//             >
//               Problems
//             </Typography>
//             <Typography
//               gutterBottom
//               variant="h6"
//               component="div"
//               color="white"
//               textAlign="left"
//               align="left"
//               fontWeight="bold"
//             >
//               it is a long established fact that a reader will be distracted.
//             </Typography>
//             <Typography
//               gutterBottom
//               variant="p"
//               component="div"
//               color="white"
//               textAlign="left"
//               align="left"
//             >
//               many desktop publishing packages and web page editors now use
//               lorem ipsum as their default model text, and a search for 'lorem
//               ipsum'
//             </Typography>
//           </CardContent>
//         </Box>
//       </Card>
//     </div>
//   );
// }

// function ActionAreaCard({ img, title, des }) {
//   return (
//     <Card
//       sx={{
//         maxWidth: 325,
//         height: 240,
//         marginLeft: "auto",
//         marginRight: "auto",
//         boxShadow: "-12px 13px 0px -2px #61fbda",
//       }}
//     >
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="240"
//           image={img}
//           alt="green iguana"
//         />
//         <CardContent>
//           {/* <Typography gutterBottom variant="h5" component="div">
//             {title}
//           </Typography> */}
//           <Typography variant="body2" color="text.secondary">
//             {des}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }

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
        YOU NEED AN ETHUREUM WALLET TO COUNTINUE
        </Typography>
        <br/>
        <Typography
          component="p"
          variant="p"
          align="center"
          color="gray"
          gutterBottom
          fontWeight="bold"
        >
        Ethereum wallets are applications that let you interact with your
Ethereum account. Think of it like an internet banking app –
without the bank. 
        </Typography>
        <br/>
        {/* <Player
          playsInline
          poster="https://images.unsplash.com/photo-1475552113915-6fcb52652ba2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM2fHxyYW5kb20lMjBwZW9wbGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        /> */}
        <Image src="https://images.unsplash.com/photo-1622102686103-dd4ea18f1d0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZXRoZXJldW18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
    
    </ThemeProvider>
  );
}
