import { Typography } from "@mui/material";

interface TextGradientProps {
  text: string;
  className?: string;
}
const TextGradient = ({ text, className }: TextGradientProps) => {
  return (
    <Typography className={`text-center ${className}`} variant="h4">
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
