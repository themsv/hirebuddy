import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ items, label, item, setItem }) {
  const handleChange = (event) => {
    setItem(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>

        <Select
          data-testid="select"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={item}
          defaultValue={""}
          label={label}
          onChange={handleChange}
        >
          {" "}
          {items?.map((item) => {
            return (
              <MenuItem key={item.key} value={item.value}>
                {item.value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
