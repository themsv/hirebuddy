import React, { Fragment, useEffect } from "react";

import { useFormControls } from "./FormControls";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormRadioBtn from "../form-radio/index";
import FormSelectMultiple from "../form-select-multiple/index";
import Divider from "@mui/material/Divider";
import { Header, ShadowBox } from "../interviewInformation/style";
import {
  CAREERSTAGES,
  OUTCOMEVALUES,
  ISTRAINABLE,
  TRAININGS,
} from "../../constants/common";

const FinalFeedback = ({ candidateData, setCandidateData }) => {
  const { handleInputValue, errors, values } = useFormControls();

  useEffect(() => {
    setCandidateData({ ...candidateData, finalFeedback: { ...values } });
  }, [values]);
  return (
    <Fragment>
      <CssBaseline />
      <br></br>
      <Container maxWidth="md" data-testid="step-3">
        <form autoComplete="off">
          <ShadowBox>
            <Header>Final Feedback</Header>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <p>Relevant Experience (In yrs.)</p>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type="number"
                  onChange={handleInputValue}
                  onBlur={handleInputValue}
                  value={values.relaventExperience}
                  name="relaventExperience"
                  label="Relevant Experience"
                  error={!!errors["relaventExperience"]}
                  fullWidth
                  {...(errors["relaventExperience"] && {
                    error: true,
                    helperText: errors["relaventExperience"],
                  })}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <p>Recommended Career Stage</p>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onChange={handleInputValue}
                  onBlur={handleInputValue}
                  required
                  name="recommendedCareerStage"
                  value={values.recommendedCareerStage}
                  label="Recommended Career Stage"
                  error={!!errors["recommendedCareerStage"]}
                  fullWidth
                  {...(errors["recommendedCareerStage"] && {
                    error: true,
                    helperText: errors["recommendedCareerStage"],
                  })}
                  select
                >
                  {CAREERSTAGES.map((option) => (
                    <MenuItem key={option.key} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <p>Outcome</p>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  onChange={handleInputValue}
                  onBlur={handleInputValue}
                  value={values.outcome}
                  name="outcome"
                  label="Outcome"
                  error={!!errors["outcome"]}
                  fullWidth
                  {...(errors["outcome"] && {
                    error: true,
                    helperText: errors["outcome"],
                  })}
                  select
                >
                  {OUTCOMEVALUES.map((option) => (
                    <MenuItem key={option.key} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            {values.outcome === "selected" && (
              <>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <p>Trainable</p>
                  </Grid>
                  <Grid item xs={6}>
                    <FormRadioBtn
                      label="Trainable"
                      name="trainable"
                      radioValues={ISTRAINABLE}
                      value={values.trainable}
                      onChange={handleInputValue}
                      onBlur={handleInputValue}
                    />
                  </Grid>
                </Grid>
              </>
            )}

            {values.outcome === "selected" && values.trainable === "Yes" && (
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <p>Trainings</p>
                </Grid>
                <Grid item xs={6}>
                  <FormSelectMultiple
                    label="Trainings"
                    items={TRAININGS}
                    name="trainings"
                    value={values.trainings}
                    onChange={handleInputValue}
                    onBlur={handleInputValue}
                  />
                </Grid>
              </Grid>
            )}
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <p>Feedback</p>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  multiline
                  fullWidth
                  onChange={handleInputValue}
                  onBlur={handleInputValue}
                  label="Feedback"
                  error={!!errors["feedback"]}
                  {...(errors["feedback"] && {
                    error: true,
                    helperText: errors["feedback"],
                  })}
                  minRows={3}
                  placeholder="Minimum 50 characters"
                  value={values.feedback}
                  name="feedback"
                />
              </Grid>
            </Grid>
            <Divider />
          </ShadowBox>
        </form>
      </Container>
    </Fragment>
  );
};

export default FinalFeedback;
