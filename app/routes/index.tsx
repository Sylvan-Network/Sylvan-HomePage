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
import Aim from "~/components/home/aim";
import Brief from "~/components/home/brief";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

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
          <Info />
          <Reason />
          <Aim />
          <Brief />
        </div>
      </WalletProvider>
    </>
  );
}
export default ResponsiveAppBar;
