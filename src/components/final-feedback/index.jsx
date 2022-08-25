import React from "react";
import BasicSelect from "../dropdown/index";
import FormInput from "../form-input/index";
import FormRadioBtn from "../form-radio/index";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import { Header, ShadowBox } from "../interviewInformation/style";

const FinalFeedback = () => {
  const careerStages = [
    { key: "71", value: "Junior Associate" },
    { key: "71", value: "Associate L1" },
    { key: "71", value: "Associate L2" },
    { key: "71", value: "Sr. Associate L1" },
    { key: "71", value: "Sr. Associate L2" },
    { key: "71", value: "Manager" },
    { key: "71", value: "Sr. Manager" },
  ];
  const outcomeValues = [
    { key: "81", value: "selected" },
    { value: "81", value: "rejected" },
  ];
  const isTrainable = [
    { key: "91", value: "Yes" },
    { key: "92", value: "No" },
  ];
  const trainings = [
    { key: "101", value: "HTML" },
    { key: "101", value: "CSS" },
    { key: "101", value: "OOJS - Advanced" },
    { key: "101", value: "Functional JS - Advanced" },
    { key: "101", value: "ReactJS - Advanced" },
  ];
  return (
    <React.Fragment>
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
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <p>Recommended Career Stage</p>
            </Grid>
            <Grid item xs={6}>
              <BasicSelect
                items={careerStages}
                label="Recommended Career Stage"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <p>Outcome</p>
            </Grid>
            <Grid item xs={6}>
              <FormRadioBtn label="Outcome" radioValues={outcomeValues} />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <p>Trainable</p>
            </Grid>
            <Grid item xs={6}>
              <FormRadioBtn label="Trainable" radioValues={isTrainable} />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <p>Trainings</p>
            </Grid>
            <Grid item xs={6}>
              <BasicSelect label="Trainings" items={trainings} multiple />
            </Grid>
          </Grid>
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
              />
            </Grid>
          </Grid>
          <Divider />
        </ShadowBox>
      </Container>
    </React.Fragment>
  );
};

export default FinalFeedback;
