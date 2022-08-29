import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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
            label="Request Date"
            onChange={(event) => {
              onChange(event);
              setreqDate(event);
            }}
            renderInput={(params) => <TextField {...params} />}
            {...restField}
          />
        </LocalizationProvider>
      )}
    />
  );
}
