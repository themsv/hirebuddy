import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const FormRadioBtn = ({ radioValues, label, ...remaning }) => {
  return (
    <FormControl>
      <RadioGroup row name={label} {...remaning} required>
        {radioValues.map((radioValue) => (
          <FormControlLabel
            value={radioValue.value}
            key={radioValue.key}
            control={<Radio />}
            label={radioValue.value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default FormRadioBtn;
