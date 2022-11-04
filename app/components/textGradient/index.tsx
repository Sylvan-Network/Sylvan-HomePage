import { Typography } from "@mui/material";

interface TextGradientProps {
  text: string;
}
const TextGradient = ({ text }: TextGradientProps) => {
  return (
    <Typography className="text-center" variant="h4">
      <span
        style={{
          background: "linear-gradient(to right, #43c0b9, #b51fed)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        {text}
      </span>
    </Typography>
  );
};

export default TextGradient;
