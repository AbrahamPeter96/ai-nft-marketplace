import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import MButton from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Input, Button } from "antd";
import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { uploadNft } from "../../libs/apis";

const theme = createTheme();

export default function CreateNftMain() {
  const [name, setName] = useState(null);
  const [link, setLink] = useState(null);
  const [file, setFile] = useState(null);
  const props = {
    action: "//jsonplaceholder.typicode.com/posts/",
    listType: "picture",
    previewFile(file) {
      console.log("Your upload file:", file);
      setFile(file);
      // Your process logic. Here we just mock to the same file
      return fetch("https://next.json-generator.com/api/json/get/4ytyBoLK8", {
        method: "POST",
        body: file,
      })
        .then((res) => res.json())
        .then(({ thumbnail }) => thumbnail);
    },
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(
  
      name,
      link
    );
    uploadNft(false, file)
      .then((res) => {
        console.log(res);
      })
      .catch(console.log);
  };
  return (
    <div style={{ backgroundColor: "#282c34", color: "#fff" }}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" style={{ color: "#fff" }}>
              Create Nft
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Input placeholder="NFT Name" onChange={setName} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input placeholder="External Link" onChange={setLink} />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Upload Image</Button>
                  </Upload>
                </Grid>
              </Grid>
              <MButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Save
              </MButton>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <br />
      <br />
      <br />
    </div>
  );
}
