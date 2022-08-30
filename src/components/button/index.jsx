import Button from "@mui/material/Button";

const BaseButton = ({ children, ...props }) => {
  return (
    <Button data-testid="button" {...props}>
      {children}
    </Button>
  );
};

export default BaseButton;
