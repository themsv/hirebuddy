import styled from "@emotion/styled";

export const Topics = styled("div")(({ theme }) => ({
  flex: 3,
  "& .MuiAccordionSummary-content": {
    display: "flex",
    justifyContent: "space-between",
  },
  "& .questions-list": {
    padding: 0,
    "& li": {
      listStyleType: "none",
      "& p": {
        margin: 0,
      },
    },
    "& .MuiFormLabel-root": {
      fontSize: "14px",
      top: "-8px",
    },
    "& .questions-actions": {
      display: "flex",
      maxWidth: "25%",
      "& .feedback-action": {
        display: "flex",
        alignItems: "center",
        fontSize: "13px",
        color: theme.palette.primary.main,
        marginLeft: "5px",
      },
    },
  },
}));
