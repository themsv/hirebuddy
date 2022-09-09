import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/user/userAction";

export default function AutoCompleteBox({ value, setValue, usersList }) {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <Autocomplete
      data-testid="autocomplete-search"
      fullWidth
      value={value}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      size="small"
      disablePortal
      id="combo-box-demo"
      options={usersList}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Search Oracle Id" />
      )}
    />
  );
}
