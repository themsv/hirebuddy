import styled from "@emotion/styled";

export const Aside = styled("aside")(({ theme }) => ({
  backgroundColor: theme.palette.background.main,
  flex: 1,
  minHeight: "89vh",
  maxWidth: "25%",
  "& ul": {
    paddingLeft: "10px",
  },
  "& li": {
    listStyleType: "none",
    padding: "6px 0",
    cursor: "pointer",
    fontSize: "14px",
    display: "flex",
    justifyContent: "space-between",
    margin: "0px 5px",
    alignItems: "center",
  },
  "& li.active-nav": {
    color: theme.palette.primary.main,
    "& MuiChip-root": {
      color: theme.palette.primary.main,
    },
  },
}));
