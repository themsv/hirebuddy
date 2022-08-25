import { useState } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const FormRadioBtn = ({ radioValues, label }) => {
  const [value, setValue] = useState();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <RadioGroup
        row
        name={label}
        value={value}
        onChange={handleChange}
        required
      >
        {radioValues.map((radioValue) => (
          <FormControlLabel
            value={radioValue.key}
            control={<Radio />}
            label={radioValue.value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default FormRadioBtn;
