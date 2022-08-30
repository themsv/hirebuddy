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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const steps = [
  "Interview Information",
  "Technical Round Data",
  "Final Feedback",
];
const schema = yup.object().shape({
  interviewDate: yup.date().required(),
  interviewMode: yup.string().typeError("Enter Mode"),
  interviewType: yup.string(),
  candidateFirstName: yup
    .string()
    .max(30, "Maximum 30 Character allowed")
    .required("Enter First Name"),
  candidateLastName: yup
    .string()
    .max(30, "Maximum 30 Character allowed")
    .required("Enter Last Name"),
  candidatePhone: yup
    .number("Enter Phone number")
    .typeError("Enter Phone Number")
    .max(10, "Maximum 10 number allowed")
    .required("Enter Phone number"),
  candidateEmail: yup
    .string()
    .email("Enter email correct form")
    .required("Enter email"),
  candidateExperience: yup
    .number("Enter expereince ")
    .typeError("Enter experience")
    .min(1)
    .max(100)
    .required("Enter Candidate experience"),
  candidateResume: yup.string().required("Enter Resume"),
  interviewerFirstName: yup
    .string()
    .max(30, "Maximum 30 character allowed")
    .required("Enter First Name"),
  interviewerLastName: yup
    .string()
    .max(30, "Maximum 30 character allowed")
    .required("Enter Last Name"),
  interviewerEmail: yup
    .string()
    .max(30, "Maximum 30 character allowed")
    .required("Enter Resume"),
  interviewerCareerStage: yup
    .string()
    .max(30, "Maximum 30 character allowed")
    .required("Enter Career Stage"),
});
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
    trainable: "",
    trainings: [],
    feedback: "",
  },
};
const FormStepper = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    alert();
    let finalData = {
      ...data,
      interviewMode: "In Person",
      interviewType: "core-xt",
    };
    console.log(errors);
    // console.log({ ...candidateData, [candidateData.interviewData]: data });
    setCandidateData({ ...candidateData, interviewData: finalData });
  };

  console.log(errors);

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [candidateData, setCandidateData] = useState(defaultState);
  const [counter, setCounter] = useState(5);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSubmitted = useSelector((state) => state.candidates.submitted);
  console.log(candidateData);
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
        submitCandidateDetails(candidateData);
      }
      return prevActiveStep + 1;
    });
    setSkipped(newSkipped);
    // activeStep === 3 && submitCandidateDetails();
    //TODO : submit the details
    // submitCandidateDetails();
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
    setCandidateData(defaultState);
  };
  const handleSteps = (step) => {
    switch (step) {
      case 0:
        // return <div></div>;
        return (
          <InterviewDetail
            candidateData={candidateData}
            setCandidateData={setCandidateData}
            onSubmit={onSubmit}
            setValue={setValue}
            errors={errors}
            handleSubmit={handleSubmit}
            control={control}
            register={register}
          />
        );
      case 1:
        return (
          <TechnicalRound
            type="core-xt"
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
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              <ArrowBackIosIcon />
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {/* {isStepOptional(activeStep) 
            && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )
            } */}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? (
                "Finish"
              ) : (
                <ArrowForwardIosIcon onClick={() => handleSubmit(onSubmit)} />
              )}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default FormStepper;
