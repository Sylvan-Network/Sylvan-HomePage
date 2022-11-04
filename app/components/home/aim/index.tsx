import img from "../../../img/bg3-small.png";
import pinkCircle from "../../../img/light-pink-circle.png";
import { Typography } from "@mui/material";

const Aim = () => {
  return (
    <div
      className="min-h-screen bg-center bg-no-repeat flex justify-center items-center text-center"
      style={{
        backgroundImage: `url(${img}), url(${pinkCircle})`,
        backgroundSize: "50%",
        backgroundPosition: "center,right",
      }}
    >
      <div className="text-white w-[25%]">
        <Typography variant="h6" component="h6" gutterBottom>
          Rose Protocol 宪法
        </Typography>
        <Typography variant="h6" component="h6" gutterBottom>
          宪法
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          个⼈信息,即个⼈资产,⽆许可,不授权
          所有个⼈数据即个⼈资产,由个⼈掌握并保管
        </Typography>
      </div>
    </div>
  );
};

export default Aim;
