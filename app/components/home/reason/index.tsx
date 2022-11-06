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
        <Typography variant="h5" gutterBottom>
          Why we need
        </Typography>
        <Typography variant="h5" gutterBottom>
          Rose Protocol
        </Typography>
        <div className="relative">
          <div className="absolute w-[50vw]">
            <Typography variant="body1" component="p" gutterBottom>
              Personal data becomes the big data assets of various service
              providers, it is continuously sold, which leads to people being
              harassed by information.
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              The centralized service provider has a single server, personal
              data may be stolen.
            </Typography>
          </div>
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
