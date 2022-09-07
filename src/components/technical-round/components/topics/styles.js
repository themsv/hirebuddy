import styled from "@emotion/styled";

export const Topics = styled("div")(({ theme }) => ({
  flex: 1,
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
      maxWidth: "50%",
      "& .feedback-action": {
        display: "flex",
        alignItems: "center",
        fontSize: "13px",
        color: theme.palette.primary.main,
        marginLeft: "5px",
        "& button": {
          fontSize: "10px",
          fontWeight: "600",
          paddingLeft: "0",
        },
        "& svg": {
          fontSize: "16px",
        },
      },
    },
  },
}));
