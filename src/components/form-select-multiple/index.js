import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

export default function FormSelectMultiple({
  label,
  items,
  value,
  ...remaining
}) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={`${label}-label`}>{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          renderValue={(value) => value.join(",")}
          label={label}
          multiple
          value={value}
          {...remaining}
        >
          {items?.map((item) => (
            <MenuItem key={item.key} value={item.value}>
              <Checkbox checked={value.indexOf(item.value) > -1} />
              <ListItemText primary={item.value} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
