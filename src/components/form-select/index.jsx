import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { forwardRef } from "react";

const FormSelect = forwardRef(
  ({ label, items, error, helperText, setItem, ...remaining }, ref) => {
    const handleChange = (event) => {
      setItem(event.target.value);
    };
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id={`${label}-label`}>{label}</InputLabel>
          <Select
            labelId={`${label}-label`}
            id={label}
            label={label}
            {...remaining}
            inputRef={ref}
            onChange={handleChange}
          >
            {items?.map((item) => (
              <MenuItem key={item.key} value={item.value}>
                {item.value}
              </MenuItem>
            ))}
          </Select>{" "}
        </FormControl>

        {error && (
          <span
            style={{ color: "#d32f2f", fontSize: "12px", margin: "3px 14px 0" }}
          >
            {helperText}
          </span>
        )}
      </Box>
    );
  }
);

export default FormSelect;
