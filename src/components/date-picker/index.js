import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function convert(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [day, mnth, date.getFullYear()].join("/");
}

export default function BasicDatePicker({ control, setreqDate, name }) {
  return (
    <Controller
      name={name}
      defaultValue=""
      control={control}
      rules={{ required: true }}
      render={({ field: { onChange, ...restField } }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Request Date *"
            inputFormat="MM/dd/yyyy"
            onChange={(event) => {
              onChange(event);
              setreqDate(event);
            }}
            renderInput={(params) => (
              <TextField size="small" sx={{ minWidth: 380 }} {...params} />
            )}
            {...restField}
          />
        </LocalizationProvider>
      )}
    />
  );
}
