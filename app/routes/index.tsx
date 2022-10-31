import * as React from "react";
import Header from "~/components/header";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Info from "~/components/info";

const Div = styled(Box)(({ theme, style }) => {
  return {
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    ...style,
  };
});

const DivDark = styled(Div)(({ theme, style }) => {
  return {
    backgroundColor: "#000",
    color: "#fff",
    ...style,
  };
});

const list1 = [
  {
    children: (
      <Div style={{ paddingRight: 105, paddingLeft: "8rem" }}>
        <Typography align="left" variant="h3" component="h3" gutterBottom>
          Private, Secure Communication
        </Typography>
        <Typography align="left" paragraph>
          Status is a secure messaging app, crypto wallet, and Web3 browser
          built with state of the art technology.
        </Typography>
      </Div>
    ),
    colomn: 6,
  },
  {
    children: (
      <DivDark>
        <img
          src="https://status.im/img/teaser-image-2x.png"
          alt="图片"
          style={{ position: "relative", left: -105 }}
        />
      </DivDark>
    ),
    colomn: 6,
  },
];

const list2 = [
  {
    children: (
      <DivDark style={{ padding: "8rem" }}>
        <Typography align="left" variant="h3" component="h3" gutterBottom>
          Message, Browse, Transact on your Terms
        </Typography>
        <Typography align="left" paragraph>
          Integrated into one powerful super app for private secure
          communication.
        </Typography>
      </DivDark>
    ),
    colomn: 6,
  },
  {
    children: (
      <img src="https://status.im/img/teaser-image-2x.png" alt="图片" />
    ),
    colomn: 6,
  },
];

const list3 = [
  {
    children: (
      <img src="https://status.im/img/teaser-image-2x.png" alt="图片" />
    ),
    colomn: 6,
  },
  {
    children: (
      <DivDark style={{ padding: "8rem" }}>
        <Typography align="left" variant="h4" component="h3" gutterBottom>
          Borderless Crypto Payments
        </Typography>
        <Typography align="left" variant="h3" component="h3" gutterBottom>
          Secure Crypto Wallet
        </Typography>
        <Typography align="left" paragraph>
          Safely send, store and receive cryptocurrencies including ERC20 and
          ERC721 tokens with the Status crypto wallet. Only you hold the keys to
          your funds. Status' intuitive design protects you and your funds from
          attacks.
        </Typography>
      </DivDark>
    ),
    colomn: 6,
  },
];

function ResponsiveAppBar() {
  return (
    <>
      <Header />
      <div>
        <Info list={list1} />
        <Info list={list2} />
        <Info list={list3} />
      </div>
    </>
  );
}
export default ResponsiveAppBar;
