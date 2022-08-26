import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import InterviewDetail from "../interviewInformation/index";
import FinalFeedback from "../final-feedback/index";
import TechnicalRound from "../technical-round";
import { submitCandidate } from "../../store/candidate/candidate.action";
import { CheckCircleOutline } from "@mui/icons-material";
import { CANDIDATE_DETAILS } from "../../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetIsSubmitted } from "../../store/candidate/canditate.slice";

const steps = [
  "Interview Information",
  "Technical Round Data",
  "Final Feedback",
];

const FormStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [candidateData, setCandidateData] = useState({});
  const [counter, setCounter] = useState(5);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSubmitted = useSelector((state) => state.candidates.submitted);

  useEffect(() => {
    if (isSubmitted) {
      redirectToCandidatePage();
    }
  }, [isSubmitted]);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => {
      if (prevActiveStep + 1 == 3) {
        submitCandidateDetails();
      }
      return prevActiveStep + 1;
    });
    setSkipped(newSkipped);

    //TODO : submit the details
    // submitCandidateDetails();
  };

  const submitCandidateDetails = () => {
    if (true) {
      dispatch(submitCandidate(candidateData));
    }
  };

  const redirectToCandidatePage = () => {
    let count = 5;
    const timer = setInterval(() => {
      if (count > 0) {
        setCounter(count - 1);
        count--;
      } else {
        clearInterval(timer);
        dispatch(resetIsSubmitted());
        navigate(CANDIDATE_DETAILS);
      }
    }, 1000);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleSteps = (step) => {
    // TODO:Move <FinalFeedback /> to case2 once case1 is ready
    switch (step) {
      case 0:
        return <InterviewDetail />;
      case 1:
        return (
          <TechnicalRound
            type={"core-xt"}
            score={candidateData?.score}
            onScoreChange={handleScoreChange}
          />
        );
      case 2:
        return <FinalFeedback />;
      default:
        throw new Error("Unknown step");
    }
  };

  const handleScoreChange = (score) => {
    const data = { ...candidateData };
    data.score = score;
    setCandidateData(data);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography variant="caption">Optional</Typography>
          //   );
          // }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box> */}
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <CheckCircleOutline width="30" color="success" />
            <Typography variant="h6" color={"siccess"}>
              Feedback Submitted Successfully !
            </Typography>
            <Typography variant="body-2" type="body">
              It will redirected to candidate details page in {counter} seconds.
            </Typography>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            {/* Step {activeStep + 1} */}
          </Typography>
          {handleSteps(activeStep)}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pt: 2,
            }}
          >
            <Button
              backgroundColor="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1, borderRadius: "50%" }}
            >
              <ArrowBackIosIcon />
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? (
                "Finish"
              ) : (
                <ArrowForwardIosIcon />
              )}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default FormStepper;
