import * as React from "react";
import Header from "~/components/header";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Info from "~/components/info";
import { useTheme } from "@mui/material/styles";
import StandardImageList from "~/components/home/imgList";
import TextareaAutosize from "@mui/material/TextareaAutosize";

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
    ...style,
    className,
    color: "#fff",
  };
});

const list1 = [
  {
    children: (
      <Div style={{ padding: "4rem" }}>
        <Typography align="left" variant="h3" component="h3" gutterBottom>
          Build <span className="text-[#f790f3]">decentralized </span>
          social experiences with Orbis Protocol
        </Typography>
        <Typography align="left" paragraph>
          Integrated into one powerful super app for private secure
          communication.
        </Typography>
      </Div>
    ),
    colomn: 6,
  },
  {
    children: (
      <Div style={{ paddingLeft: 110 }}>
        <Typography align="left" variant="body2" component="span">
          Start sharing via Orbis Protocol:
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
            height: 100,
          }}
        />
      </Div>
    ),
    colomn: 6,
  },
];

const list2 = [
  {
    children: (
      <Div style={{ padding: "8rem" }}>
        <Typography align="left" variant="h3" component="h3" gutterBottom>
          Build <span className="text-[#f790f3]">decentralized</span>
          social experiences with Orbis Protocol
        </Typography>
        <Typography align="left" paragraph>
          Integrated into one powerful super app for private secure
          communication.
        </Typography>
      </Div>
    ),
    colomn: 6,
  },
  {
    children: (
      <Div>
        <img
          src="https://status.im/img/teaser-image-2x.png"
          alt="图片"
          className="translate-x-[-8rem]"
        />
      </Div>
    ),
    colomn: 6,
  },
];

function ResponsiveAppBar() {
  const theme = useTheme();
  console.log(theme);
  return (
    <>
      <Header />
      <div
        className={`px-[110px] bg-[${theme.palette.primary.main}] min-h-screen`}
      >
        <Info list={list1} />
        <StandardImageList />
        {/* <Info list={list2} /> */}
      </div>
    </>
  );
}
export default ResponsiveAppBar;
