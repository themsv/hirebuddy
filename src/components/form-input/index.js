import TextField from "@mui/material/TextField";

const FormInput = ({ ...props }) => {
  return (
    <TextField
      data-testid="FormInput"
      sx={{ width: "100%" }}
      required
      variant="outlined"
      {...props}
    />
  );
};

export default FormInput;
