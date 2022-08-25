import styled from "@emotion/styled";

export const CustomSelectBox = styled("div")(({ theme }) => ({
  flex: 1,
  fontSize: "14px",
  maxWidth: "100%",
  "& .MuiInputBase-root": {
    maxHeight: "40px",
  },
  "& .MuiSelect-select": {
    fontSize: "14px",
  },
  "& .MuiSelect-select > div": {
    display: "flex",
    alignItems: "center",
  },
  "& .MuiSelect-select svg": {
    fontSize: "14px",
    marginRight: "3px",
  },
}));
