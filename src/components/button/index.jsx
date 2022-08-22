import Button from "@mui/material/Button";

const BaseButton = ({ children, ...props }) => {
  return <Button {...props}> {children} </Button>;
};

export default BaseButton;
