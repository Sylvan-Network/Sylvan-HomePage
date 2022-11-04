import pinkCircle from "../../../img/pink-circle.png";
import img from "../../../img/3.png";
import { Typography } from "@mui/material";

const Reason = () => {
  return (
    <div
      className="min-h-screen flex flex-row justify-center"
      // style={{
      //   backgroundImage: `url(${pinkCircle}), `,
      //   backgroundSize: "50%, 50%",
      //   backgroundRepeat: "no-repeat, no-repeat",
      //   backgroundPosition: "left, 75%",
      // }}
    >
      <div
        className="text-white w-[50%] bg-center bg-no-repeat flex flex-col justify-center content-center px-[20%]"
        style={{
          backgroundImage: `url(${pinkCircle})`,
          backgroundSize: "100%",
        }}
      >
        <Typography variant="h6" component="h6" gutterBottom>
          我们为什么要做
        </Typography>
        <Typography variant="h6" component="h6" gutterBottom>
          Rose Protocol
        </Typography>
        <div className="relative">
          <Typography
            className="absolute w-[100vw]"
            variant="body1"
            component="p"
            gutterBottom
          >
            当个⼈数据成了各种服务商的⼤数据资产,被源源不断的被出售
          </Typography>
          <Typography
            className={`absolute w-[100vw] top-[24px]`}
            variant="body1"
            component="p"
            gutterBottom
          >
            被信息骚扰. 也因为中⼼化的服务商服务器单⼀,导致个⼈数据可能被盗,
          </Typography>
        </div>
      </div>
      <div
        className="flex-1 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "100%",
        }}
      />
    </div>
  );
};

export default Reason;
