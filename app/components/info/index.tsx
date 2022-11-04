import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { ConnectButton } from "@suiet/wallet-kit";

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
    color: "#fff",
    // backgroundColor: theme.palette.primary.main,
    ...style,
    className,
  };
});

const Info = () => {
  return (
    <div style={{ height: "calc(100vh - 70px)" }} className="flex flex-row">
      <Div className="flex w-[60%] pl-[20%]">
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
      <Div className="flex-1 flex flex-col justify-center pr-[10%]">
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
    </div>
  );
};

export default Info;
