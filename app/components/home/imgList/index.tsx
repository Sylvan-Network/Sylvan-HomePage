import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import img1 from "./home-data-ownership-icon.png";
import img2 from "./home-decentralized-icon.png";
import img3 from "./home-multichain.png";
import img4 from "./home-sdk-icon.png";
import { styled } from "@mui/material/styles";

const ImgList = styled(ImageList)(({ theme, style, className }) => {
  return {
    ...style,
    className,
  };
});

const ImgListItem = styled(ImageListItem)(({ theme, style, className }) => {
  return {
    ...style,
    className,
  };
});

export default function StandardImageList() {
  return (
    <div className="bg-[#140918] text-center pt-[110px]">
      <ImgList
        style={{ width: "80%", margin: "0 auto" }}
        cols={4}
        gap={0}
        rowHeight={164}
      >
        {itemData.map((item) => (
          <ImgListItem
            style={{ alignItems: "center", color: "#fff" }}
            key={item.img}
          >
            <img
              src={item.img}
              style={{ width: 85 }}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              position="below"
              color="#fff"
            />
          </ImgListItem>
        ))}
      </ImgList>
    </div>
  );
}

const itemData = [
  {
    img: img1,
    title: "Decentralized",
    author: "@bkristastucchio",
  },
  {
    img: img2,
    title: "Data Ownership",
    author: "@rollelflex_graphy726",
  },
  {
    img: img3,
    title: "Easy to build on",
    author: "@helloimnik",
  },
  {
    img: img4,
    title: "Multi-chain",
    author: "@nolanissac",
  },
];
