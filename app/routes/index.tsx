import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Header from "~/components/header";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Div = styled(Item)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
}));

function ResponsiveAppBar() {
  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={7} md={7}>
            <Div>
              <Typography align="left" variant="h1" component="h2">
                xxx
              </Typography>
              <Typography align="left" paragraph>
                hgfhgfhg
              </Typography>
            </Div>
          </Grid>
          <Grid item xs={5} md={5}>
            <Item>
              <img
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                alt="图片"
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default ResponsiveAppBar;
