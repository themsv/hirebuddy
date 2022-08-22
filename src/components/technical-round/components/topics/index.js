import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AddTask } from "@mui/icons-material";
import "./style.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Topics = ({ selectedCategory }) => {
  console.log(selectedCategory);
  const [expanded, setExpanded] = React.useState(0);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="topics-section">
      {selectedCategory &&
        selectedCategory?.topics.length > 0 &&
        selectedCategory.topics.map((topic, index) => {
          const questions = topic?.questions || [];
          return (
            <Accordion
              expanded={expanded === index}
              onChange={handleChange(index)}
            >
              <AccordionSummary
                aria-controls={`${index}-content`}
                id={`${index}-header`}
              >
                <Typography>{topic.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  {questions &&
                    questions.length > 0 &&
                    questions.map((question, index) => {
                      return (
                        <li key={index}>
                          <Box
                            p={1}
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <p>{question}</p>
                            <span>
                              <select></select>
                              <span>
                                <AddTask />
                                Add Feedback
                              </span>
                            </span>
                          </Box>
                        </li>
                      );
                    })}
                </ul>
              </AccordionDetails>
            </Accordion>
          );
        })}
    </div>
  );
};

export default Topics;
