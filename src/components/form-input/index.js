import TextField from "@mui/material/TextField";

const FormInput = ({ ...props }) => {
  return (
    <TextField sx={{ width: "100%" }} required variant="outlined" {...props} />
  );
};

export default FormInput;
