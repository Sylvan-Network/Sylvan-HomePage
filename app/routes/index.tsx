import * as React from "react";
import Header from "~/components/header";
import { Button, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Info from "~/components/info";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import type { LinksFunction } from "@remix-run/node";
import {
  WalletProvider,
  getAllWallets, // support all the wallets
  ConnectButton,
} from "@suiet/wallet-kit";
import type { WalletInstance } from "@suiet/wallet-kit/dist/adapter/KitAdapter";
import styles from "@suiet/wallet-kit/style.css";
import bgImg from "../img/bg1.png";
import Reason from "~/components/home/reason";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

const Div = styled(Box)(({ theme, style, className }) => {
  return {
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    // color: theme.palette.text.secondary,
    boxShadow: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    color: "#fff",
    // backgroundColor: theme.palette.primary.main,
    ...style,
    className,
  };
});

const list1 = [
  {
    children: (
      <Div style={{ padding: "4rem" }}>
        <Typography align="left" variant="h3" component="h3" gutterBottom>
          Sylvan is a <span className="text-[#f790f3]">decentralized</span>{" "}
          social protocol on the Sui-nami blockchain.
        </Typography>
        <Button
          style={{
            width: 156,
            border: "1px solid #d27eda",
            color: "#101016",
            background: "linear-gradient(135deg,#f790bb 44.02%,#b971ee 90.66%)",
          }}
        >
          lanuch app
        </Button>
      </Div>
    ),
    colomn: 7,
  },
  {
    children: (
      <Div style={{ paddingLeft: 110 }}>
        <Typography align="left" variant="body2" component="span">
          Mint Message NFT in Sui:
        </Typography>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          style={{
            width: 368,
            background:
              "linear-gradient(180deg,rgba(186,233,233,.062),rgba(201,133,255,.28))",
            border: "1px solid #44416d",
            borderRadius: 15,
            padding: 15,
            height: 100,
          }}
          defaultValue="Hello, Sui-nami!"
        />
        <div className="mt-[20px]">
          <ConnectButton
            style={{
              width: 150,
              height: 38,
              padding: "6px 8px",
              background:
                "linear-gradient(135deg,#f790bb 44.02%,#b971ee 90.66%)",
              border: "1px solid #d27eda",
              color: "#101016",
            }}
          >
            Connect
          </ConnectButton>
        </div>
      </Div>
    ),
    colomn: 5,
  },
];

function ResponsiveAppBar() {
  const theme = useTheme();
  console.log(theme);
  const [supportedWallets, setSupportedWallets] = React.useState<
    WalletInstance[]
  >([]);

  React.useEffect(() => {
    const supported = getAllWallets();
    setSupportedWallets(supported);
  }, []);

  return (
    <>
      <WalletProvider supportedWallets={supportedWallets}>
        <div
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "100vw",
            backgroundColor: "#000000",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Header />
          <div className={`min-h-screen px-[110px]`}>
            <Info list={list1} />
          </div>
          <Reason />
        </div>
      </WalletProvider>
    </>
  );
}
export default ResponsiveAppBar;
