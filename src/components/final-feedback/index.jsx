import { Fragment } from "react";
import FormSelect from "../form-select/index";
import FormSelectMultiple from "../form-select-multiple/index";
import FormInput from "../form-input/index";
import FormRadioBtn from "../form-radio/index";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import { Header, ShadowBox } from "../interviewInformation/style";

import {
  CAREERSTAGES,
  OUTCOMEVALUES,
  ISTRAINABLE,
  TRAININGS,
} from "../../constants/common";

const FinalFeedback = ({ candidateData, setCandidateData }) => {
  return (
    <Fragment>
      <CssBaseline />
      <br></br>
      <Container maxWidth="md">
        <ShadowBox>
          <Header>Final Feedback</Header>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <p>Relevant Experience (In yrs.)</p>
            </Grid>
            <Grid item xs={6}>
              <FormInput
                type="number"
                label="Relevant Experience (In yrs.)"
                min="0"
                max="40"
                value={candidateData.finalFeedback.relaventExperience}
                onChange={(e) =>
                  setCandidateData({
                    ...candidateData,
                    finalFeedback: {
                      ...candidateData.finalFeedback,
                      relaventExperience: e.target.value,
                    },
                  })
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <p>Recommended Career Stage</p>
            </Grid>
            <Grid item xs={6}>
              <FormSelect
                items={CAREERSTAGES}
                label="Recommended Career Stage"
                value={candidateData.finalFeedback.recommendedCareerStage}
                onChange={(e) =>
                  setCandidateData({
                    ...candidateData,
                    finalFeedback: {
                      ...candidateData.finalFeedback,
                      recommendedCareerStage: e.target.value,
                    },
                  })
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <p>Outcome</p>
            </Grid>
            <Grid item xs={6}>
              <FormRadioBtn
                label="Outcome"
                radioValues={OUTCOMEVALUES}
                value={candidateData.finalFeedback.outcome}
                onChange={(e) =>
                  setCandidateData({
                    ...candidateData,
                    finalFeedback: {
                      ...candidateData.finalFeedback,
                      outcome: e.target.value,
                    },
                  })
                }
              />
            </Grid>
          </Grid>
          {candidateData.finalFeedback.outcome === "selected" && (
            <>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <p>Trainable</p>
                </Grid>
                <Grid item xs={6}>
                  <FormRadioBtn
                    label="Trainable"
                    radioValues={ISTRAINABLE}
                    value={candidateData.finalFeedback.trainable}
                    onChange={(e) =>
                      setCandidateData({
                        ...candidateData,
                        finalFeedback: {
                          ...candidateData.finalFeedback,
                          trainable: e.target.value,
                        },
                      })
                    }
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <p>Trainings</p>
                </Grid>
                <Grid item xs={6}>
                  <FormSelectMultiple
                    label="Trainings"
                    items={TRAININGS}
                    value={candidateData.finalFeedback.trainings}
                    onChange={(e) =>
                      setCandidateData({
                        ...candidateData,
                        finalFeedback: {
                          ...candidateData.finalFeedback,
                          trainings: e.target.value,
                        },
                      })
                    }
                  />
                </Grid>
              </Grid>
            </>
          )}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <p>Feedback</p>
            </Grid>
            <Grid item xs={6}>
              <TextareaAutosize
                required
                minRows={3}
                aria-label="maximum height"
                placeholder="Minimum 400 words"
                style={{ width: "100%" }}
                value={candidateData.finalFeedback.feedback}
                onChange={(e) =>
                  setCandidateData({
                    ...candidateData,
                    finalFeedback: {
                      ...candidateData.finalFeedback,
                      feedback: e.target.value,
                    },
                  })
                }
              />
            </Grid>
          </Grid>
          <Divider />
        </ShadowBox>
      </Container>
    </Fragment>
  );
};

export default FinalFeedback;
