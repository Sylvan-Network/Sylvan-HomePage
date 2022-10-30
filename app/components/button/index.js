import styles from "./styles.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
];

export const Button = React.forwardRef(
  ({ children, ...props }, ref) => {
    return <button {...props} ref={ref} data-button />;
  }
);
Button.displayName = "Button";