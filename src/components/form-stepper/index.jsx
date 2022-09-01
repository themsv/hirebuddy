import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import BaseButton from "../button/index";
import Typography from "@mui/material/Typography";

import InterviewDetail from "../interviewInformation/index";
import FinalFeedback from "../final-feedback/index";
import "./styles.css";
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

const defaultState = {
  interviewData: {
    interviewDate: "",
    interviewMode: "",
    interviewType: "",
    candidateFirstName: "",
    candidateLastName: "",
    candidatePhone: "",
    candidateEmail: "",
    candidateExperience: "",
    candidateCareerStageInterviewedFor: "",
    candidateResume: "",
    interviewerOracleId: "",
    interviewerFirstName: "",
    interviewerLastName: "",
    interviewerEmail: "",
    interviewerCareerStage: "",
  },
  score: {},
  finalFeedback: {
    relaventExperience: "",
    recommendedCareerStage: "",
    outcome: "",
    feedback: "",
    trainable: "",
    trainings: [],
  },
};

const FormStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [candidateData, setCandidateData] = useState(defaultState);
  const [counter, setCounter] = useState(5);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSubmitted = useSelector((state) => state.candidates.submitted);

  const [disbaleIcon, setDisableIcon] = useState(true);

  useEffect(() => {
    if (isSubmitted) {
      redirectToCandidatePage();
    }
  }, [isSubmitted]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep + 1 === 3) {
        submitCandidateDetails();
      }
      return prevActiveStep + 1;
    });
  };

  const submitCandidateDetails = async () => {
    const res = await dispatch(submitCandidate(candidateData));
    console.log(res);
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
  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <InterviewDetail
            candidateData={candidateData}
            setCandidateData={setCandidateData}
          />
        );
      case 1:
        return (
          <TechnicalRound
            type={candidateData.interviewData.interviewMode}
            score={candidateData?.score}
            onScoreChange={handleScoreChange}
          />
        );
      case 2:
        return (
          <FinalFeedback
            candidateData={candidateData}
            setCandidateData={setCandidateData}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  };

  const handleScoreChange = (score) => {
    const data = { ...candidateData };
    data.score = score;
    setCandidateData(data);
  };

  useEffect(() => {
    if (activeStep === 2) {
      const { relaventExperience, recommendedCareerStage, outcome, feedback } =
        candidateData.finalFeedback;

      if (
        relaventExperience.length > 0 &&
        recommendedCareerStage.length > 0 &&
        outcome.length > 0 &&
        feedback.length > 0
      ) {
        setDisableIcon(false);
      } else {
        setDisableIcon(true);
      }
    }
  }, [candidateData.finalFeedback]);
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
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
            <button
              className="icon-warpper"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              <ion-icon classname="iconstyle" name="chevron-back"></ion-icon>
            </button>
            <Box sx={{ flex: "1 1 auto" }} />
            {activeStep === steps.length - 1 ? (
              <BaseButton onClick={handleNext} disabled={disbaleIcon}>
                Finish
              </BaseButton>
            ) : (
              <button className="icon-warpper" onClick={handleNext}>
                <ion-icon
                  classname="iconstyle"
                  name="chevron-forward"
                ></ion-icon>
              </button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default FormStepper;
