import styled from "@emotion/styled";

export const CandidateDetailsDiv = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  "& .primary-color": {
    color: theme.palette.primary.main,
    fontSize: "13px",
    textDecoration: "underline",
  },
}));
