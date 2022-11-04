import blueCircle from "../../../img/blue-circle.png";
import footerImg from "../../../img/bg-footer.png";
import logo from "../../../img/logo.png";
import TextGradient from "~/components/textGradient";

const Brief = () => {
  return (
    <div
      className="min-h-screen bg-no-repeat flex flex-col"
      style={{
        backgroundImage: `url(${blueCircle}), url(${footerImg})`,
        backgroundSize: "50%, 100%",
        backgroundPosition: "left,bottom",
      }}
    >
      <TextGradient text="欢迎来到Rose Protocol" />
      <div className="flex-1"></div>
      <div className="text-center flex justify-center mb-[20px]">
        <img src={logo} className="w-[85px]" />
      </div>
    </div>
  );
};

export default Brief;
