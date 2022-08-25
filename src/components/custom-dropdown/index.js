import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CircleOutlined } from "@mui/icons-material";
import { CustomSelectBox } from "./style";

export default function CustomSelect({ items, label, value, onChange }) {
  const [val, setVal] = React.useState("");
  console.log("value", label + " " + value);

  React.useEffect(() => {
    if (value || value === 0) {
      setVal(value + 1);
    } else {
      setVal(value);
    }
  }, [value]);

  const handleChange = (event) => {
    setVal(event.target.value);
    onChange(event.target.value - 1);
  };
  return (
    <CustomSelectBox sx={{ width: "100%" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={val}
          label={"Rating"}
          onChange={handleChange}
        >
          {items?.map((item) => {
            return (
              <MenuItem
                value={item.key + 1}
                key={item.key}
                className="rating-select-option"
              >
                <div>
                  <CircleOutlined
                    sx={{
                      color: `${item.iconColor}`,
                    }}
                  />
                  {item.value}
                </div>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </CustomSelectBox>
  );
}
