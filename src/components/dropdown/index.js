import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

export default function BasicSelect({ items, label, isMultiple }) {
  const [age, setAge] = React.useState("");
  const [multiOptions, setMultiOptions] = React.useState([]);
  const handleChange = (event) => {
    const { value } = event.target;
    console.log(value);
    isMultiple ? setMultiOptions(value) : setAge(value);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          data-testid="select"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={isMultiple ? multiOptions : age}
          renderValue={isMultiple && ((multiOptions) => multiOptions.join(","))}
          label={label}
          multiple={isMultiple}
          onChange={handleChange}
        >
          {items?.map((item) =>
            isMultiple ? (
              <MenuItem key={item.key} value={item.value}>
                <Checkbox checked={multiOptions.indexOf(item.value) > -1} />
                <ListItemText primary={item.value} />
              </MenuItem>
            ) : (
              <MenuItem key={item.key} value={item.key}>
                {item.value}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>
    </Box>
  );
}
