import TextField from "@mui/material/TextField";
import { forwardRef } from "react";

const FormInput = forwardRef((props, ref) => {
  return (
    <TextField
      sx={{ width: "100%" }}
      variant="outlined"
      fullWidth
      inputRef={ref}
      {...props}
    />
  );
});

export default FormInput;
