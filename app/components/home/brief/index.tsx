import blueCircle from "../../../img/blue-circle.png";
import footerImg from "../../../img/bg-footer.png";
import logo from "../../../img/logo.png";
import TextGradient from "~/components/textGradient";
import { Typography } from "@mui/material";

const list = [
  {
    title: "x",
    describe: "ghjghjhjkghjk",
    className: "col-start-1 col-end-3",
  },
  {
    title: "x",
    describe: "ghjghjhjkghjk",
    className: "col-start-3 col-end-5",
  },
  {
    title: "x",
    describe: "ghjghjhjkghjk",
    className: "col-start-5 col-end-7",
  },
  {
    title: "x",
    describe: "ghjghjhjkghjk",
    className: "col-start-2 col-end-4",
  },
  {
    title: "x",
    describe: "ghjghjhjkghjk",
    className: "col-start-4 col-end-6",
  },
];

interface InfoProps {
  title: string;
  describe: string;
  className: string;
  index: number;
}

const Info = ({ title, describe, className, index }: InfoProps) => {
  return (
    <div
      className={`border-4 ${className} height=[25vw] p-[16px] flex flex-col`}
    >
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" component="p" className="flex-1">
        {describe}
      </Typography>
      <Typography variant="h5" className="mt-[20px] text-center">
        {`0${index}`}
      </Typography>
    </div>
  );
};

const Brief = () => {
  return (
    <div
      className="min-h-[80vw] bg-no-repeat flex flex-col"
      style={{
        backgroundImage: `url(${blueCircle}), url(${footerImg})`,
        backgroundSize: "90%, 100%",
        backgroundPosition: "left,bottom",
      }}
    >
      <TextGradient text="Welcome to Rose Protocol" className="mt-[100px]" />
      <div className="flex-1 grid grid-cols-6 gap-[32px] text-white px-[20%] mt-[100px] mb-[30vw] min-h-[50vw]">
        {list.map((v, i) => (
          <Info key={v.title} {...v} index={i + 1} />
        ))}
      </div>
      <div className="text-center flex justify-center mb-[20px]">
        <img src={logo} className="w-[85px]" alt="logo" />
      </div>
    </div>
  );
};

export default Brief;
