import img from "../../../img/bg3-small.png";
import pinkCircle from "../../../img/light-pink-circle.png";
import { Typography } from "@mui/material";

const Aim = () => {
  return (
    <div
      className="min-h-screen bg-center bg-no-repeat flex justify-center items-center text-center"
      style={{
        backgroundImage: `url(${img}), url(${pinkCircle})`,
        backgroundSize: "40%",
        backgroundPosition: "center,right",
      }}
    >
      <div className="text-white w-[25%]">
        <Typography variant="h5" component="h5" gutterBottom>
          Rose Protocol
        </Typography>
        <Typography variant="h5" component="h5" gutterBottom>
          Constitution
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Personal information, i.e. personal assets, without permission,
          without authorization.
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          All personal data are personal assets, which are mastered and kept by
          individuals.
        </Typography>
      </div>
    </div>
  );
};

export default Aim;
