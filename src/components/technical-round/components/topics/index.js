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
import { Button } from "@mui/material";
import { AddCircleRounded, Check, GradingRounded } from "@mui/icons-material";
import FormDialog from "../dialog";

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
  const [isFeedbackFormOpen, setIsFeedbackForm] = React.useState(false);
  const [questionId, setQuestionId] = React.useState();
  const [selected, setSelected] = React.useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  React.useEffect(() => {
    setSelected({ ...selectedCategory });
  }, [selectedCategory]);

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

  const handleFeedbackSave = (feedback) => {
    let newTopic = { ...selected };
    if (expanded >= 0 && questionId >= 0) {
      newTopic.topics[expanded].questions[questionId].feedback = feedback;
      setSelected(newTopic);
    }
  };

  const setActiveQuestionId = (id) => {
    setQuestionId(id);
    setIsFeedbackForm(true);
  };

  const getTopicScore = (topic) => {
    let newSingleTopic = { ...topic };
    let counter = 0;
    const res = topic?.questions?.reduce((acc, item) => {
      if (item.score) {
        counter++;
        return acc + item.score;
      }
      return acc;
    }, 0);
    newSingleTopic.score = (res == 0 ? res : res / counter).toFixed(2);
    return newSingleTopic;
  };

  const getAreaScore = (area) => {
    let newSingleArea = { ...area };
    const res = area?.topics?.reduce((acc, item) => {
      return acc + item.score;
    }, 0);
    if (res > 0) {
      newSingleArea.score = (res / area.topics.length).toFixed(2);
    }
    return newSingleArea;
  };

  const getActiveQuestion = () => {
    if (questionId >= 0) {
      return selected.topics[expanded].questions[questionId];
    }
    return "";
  };

  return (
    <Topics className="topics-section" data-testid="topics-list">
      {selected &&
        selected?.topics?.length > 0 &&
        selected?.topics?.map((topic, index) => {
          const questions = topic?.questions || [];
          return (
            <Accordion
              expanded={expanded === index}
              onChange={handleChange(index)}
              key={index}
              data-testid={`step-${index}`}
            >
              <AccordionSummary
                aria-controls={`${index}-content`}
                id={`${index}-header`}
              >
                <Typography>{topic.title}</Typography>
                <Chip
                  data-testid="topic-score"
                  label={`Score ${topic.score}`}
                />
              </AccordionSummary>
              <AccordionDetails>
                <ul className="questions-list" data-testid="questions-list">
                  {questions &&
                    questions.length > 0 &&
                    questions.map((question, i) => {
                      return (
                        <li key={i} data-testid="questions-list-item">
                          <Box
                            p={1}
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <p style={{ flex: "1" }}>{question.title}</p>
                            <span
                              className="questions-actions"
                              style={{ flex: "1" }}
                            >
                              <CustomSelect
                                items={RATINGS}
                                label={"Rating"}
                                value={question.score}
                                onChange={(e) =>
                                  handleSelectChange(index, i, e)
                                }
                              />
                              {question.feedback ? (
                                <span className="feedback-action">
                                  <Check color="success" />
                                  <Button
                                    onClick={() => setActiveQuestionId(i)}
                                    color="success"
                                    data-testid="update-feedback"
                                  >
                                    Update
                                  </Button>
                                </span>
                              ) : (
                                <span className="feedback-action">
                                  <AddCircleRounded />
                                  <Button
                                    onClick={() => setActiveQuestionId(i)}
                                    data-testid="add-feedback"
                                  >
                                    Add Feedback
                                  </Button>
                                </span>
                              )}
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

      <FormDialog
        isOpen={isFeedbackFormOpen}
        activeItem={getActiveQuestion()}
        onClose={() => setIsFeedbackForm(false)}
        onSubmit={(feedback) => handleFeedbackSave(feedback)}
      />
    </Topics>
  );
};

export default TopicsList;
