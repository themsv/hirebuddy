import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { Topics } from "./styles";
import "./styles.js";
import { RATINGS } from "../../../../constants/common";
import CustomSelect from "../../../custom-dropdown";

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

const TopicsList = ({ selectedCategory, onScoreChange }) => {
  const [expanded, setExpanded] = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  console.log(selectedCategory);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  React.useEffect(() => {
    setSelected(selectedCategory);
    // addScoreToTheObject(selectedCategory);
  }, [selectedCategory]);

  // const addScoreToTheObject = (topic) => {
  //   let newTopic = Object.assign({}, topic);
  //   if (topic) {
  //     newTopic = Object.assign({}, topic, { score: 0 });

  //     // newTopic.assign({}, ...topic, { score: 0 });
  //     newTopic.topics.forEach((element, index) => {
  //       debugger;
  //       newTopic.topics[index] = Object.assign({}, element, { score: 0 });
  //       let questionsSet = [];
  //       if (element.questions && element.questions.length > 0) {
  //         element.questions.map((item) => {
  //           let obj = { title: item, score: 0 };
  //           questionsSet.push(obj);
  //         });
  //         // element["questions"] = [...questionsSet];
  //         element.questions = Object.assign([], questionsSet);
  //       }
  //     });
  //     debugger;
  //     setSelected(newTopic);
  //   }
  // };

  // const addScoreToTheObject = (topic) => {
  //   let newTopic = JSON.parse(JSON.stringify(topic));
  //   if (topic) {
  //     newTopic.score = 0;
  //     debugger;
  //     newTopic.topics.forEach((element, index) => {
  //       newTopic.topics[index]["score"] = 0;
  //       let questionsSet = [];
  //       if (element.questions && element.questions.length > 0) {
  //         element.questions.map((item) => {
  //           let obj = { title: item, score: "" };
  //           questionsSet.push(obj);
  //         });
  //         element.questions = questionsSet;
  //       }
  //     });
  //     setSelected(newTopic);
  //   }
  // };

  const handleSelectChange = (topicIndex, qindex, e) => {
    let newTopic = { ...selected };
    if (topicIndex >= 0 && qindex >= 0) {
      newTopic.topics[topicIndex].questions[qindex].score = e;
      const withTopicScore = getTopicScore(newTopic.topics[topicIndex]);
      newTopic.topics[topicIndex] = withTopicScore;
      const withAreaScore = getAreaScore(newTopic);
      setSelected(withAreaScore);
      onScoreChange(withAreaScore);
    }
  };

  const getTopicScore = (topic) => {
    let newSingleTopic = { ...topic };
    let counter = 0;
    const res = topic.questions.reduce((acc, item) => {
      if (item.score) {
        counter++;
        return acc + item.score;
      }
      return acc;
    }, 0);
    newSingleTopic.score = (res / counter).toFixed(2);
    return newSingleTopic;
  };

  const getAreaScore = (area) => {
    let newSingleArea = { ...area };
    let counter = 0;
    const res = area.topics.reduce((acc, item) => {
      if (item.score) {
        counter++;
        return acc + item.score;
      }
      return acc;
    }, 0);
    newSingleArea.score = (res / area.topics.length).toFixed(2);
    return newSingleArea;
  };

  return (
    <Topics className="topics-section">
      {selected &&
        selected?.topics?.length > 0 &&
        selected?.topics?.map((topic, index) => {
          const questions = topic?.questions || [];
          return (
            <Accordion
              expanded={expanded === index}
              onChange={handleChange(index)}
              key={index}
            >
              <AccordionSummary
                aria-controls={`${index}-content`}
                id={`${index}-header`}
              >
                <Typography>{topic.title}</Typography>
                <Chip label={`Score ${topic.score}`} />
              </AccordionSummary>
              <AccordionDetails>
                <ul className="questions-list">
                  {questions &&
                    questions.length > 0 &&
                    questions.map((question, i) => {
                      return (
                        <li key={i}>
                          <Box
                            p={1}
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <p style={{ flex: "3" }}>{question.title}</p>
                            <span
                              className="questions-actions"
                              style={{ flex: "1" }}
                            >
                              {/* <BasicSelect items={RATINGS} label="Rating" /> */}
                              {/* <span className="feedback-action">
                                <AddCircle fontSize="10px" />
                                Add Rating
                              </span> */}

                              <CustomSelect
                                items={RATINGS}
                                label={"Rating"}
                                value={question.score ? question.score : ""}
                                onChange={(e) =>
                                  handleSelectChange(index, i, e)
                                }
                              />
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
    </Topics>
  );
};

export default TopicsList;
