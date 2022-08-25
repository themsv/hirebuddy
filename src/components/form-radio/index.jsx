import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const FormRadioBtn = ({ radioValues, label }) => {
  return (
    <FormControl>
      {/* <FormLabel id="demo-row-radio-buttons-group-label">{label}</FormLabel> */}
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
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
