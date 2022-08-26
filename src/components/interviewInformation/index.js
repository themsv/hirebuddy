import { Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormInput from "../form-input/index";
import FormSelect from "../form-select/index";
import BasicDatePicker from "../../components/date-picker";
import { Header, ShadowBox } from "./style";
import Divider from "@mui/material/Divider";
import { CAREERSTAGES } from "../../constants/common";

const InterviewDetail = ({ candidateData, setCandidateData }) => {
  return (
    <Fragment>
      <CssBaseline />
      <br></br>
      <Container maxWidth="md">
        <ShadowBox>
          <Header>Interview Details</Header>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <p>Date</p>
            </Grid>
            {/* TODO:Need to fix date style */}
            <Grid item xs={6}>
              <FormInput
                type="date"
                value={candidateData.interviewData.interviewDate}
                onChange={(e) =>
                  setCandidateData({
                    ...candidateData,
                    interviewData: {
                      ...candidateData.interviewData,
                      interviewDate: e.target.value,
                    },
                  })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <p>Mode</p>
            </Grid>
            <Grid item xs={6}>
              <FormSelect
                items={[
                  { key: "1", value: "In Person" },
                  { key: "2", value: "Teams Video" },
                ]}
                label="Mode"
                value={candidateData.interviewData.interviewMode}
                onChange={(e) =>
                  setCandidateData({
                    ...candidateData,
                    interviewData: {
                      ...candidateData.interviewData,
                      interviewMode: e.target.value,
                    },
                  })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <p>Type</p>
            </Grid>
            <Grid item xs={6}>
              <FormSelect
                items={[
                  { key: "3", value: "Core XT" },
                  { key: "4", value: "React JS" },
                ]}
                label="Type"
                value={candidateData.interviewData.interviewType}
                onChange={(e) =>
                  setCandidateData({
                    ...candidateData,
                    interviewData: {
                      ...candidateData.interviewData,
                      interviewType: e.target.value,
                    },
                  })
                }
              />
            </Grid>
          </Grid>
          <Divider />
          <Header> Candidate Information</Header>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <p>First Name</p>
            </Grid>
            <Grid item xs={6}>
              <FormInput
                type="text"
                label="First Name"
                value={candidateData.interviewData.candidateFirstName}
                onChange={(e) =>
                  setCandidateData({
                    ...candidateData,
                    interviewData: {
                      ...candidateData.interviewData,
                      candidateFirstName: e.target.value,
                    },
                  })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <p>Last Name</p>
            </Grid>
            <Grid item xs={6}>
              <FormInput
                label="Last Name"
                type="text"
                value={candidateData.interviewData.candidateLastName}
                onChange={(e) =>
                  setCandidateData({
                    ...candidateData,
                    interviewData: {
                      ...candidateData.interviewData,
                      candidateLastName: e.target.value,
                    },
                  })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <p>Phone</p>
            </Grid>
            <Grid item xs={6}>
              <FormInput
                label="Phone"
                type="number"
                value={candidateData.interviewData.candidatePhone}
                onChange={(e) =>
                  setCandidateData({
                    ...candidateData,
                    interviewData: {
                      ...candidateData.interviewData,
                      candidatePhone: e.target.value,
                    },
                  })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <p>Email</p>
            </Grid>
            <Grid item xs={6}>
              <FormInput
                label="Email"
                type="email"
                value={candidateData.interviewData.candidateEmail}
                onChange={(e) =>
                  setCandidateData({
                    ...candidateData,
                    interviewData: {
                      ...candidateData.interviewData,
                      candidateEmail: e.target.value,
                    },
                  })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <p>Experience</p>
            </Grid>
            <Grid item xs={6}>
              <FormInput
                label="Experience"
                type="number"
                value={candidateData.interviewData.candidateExperience}
                onChange={(e) =>
                  setCandidateData({
                    ...candidateData,
                    interviewData: {
                      ...candidateData.interviewData,
                      candidateExperience: e.target.value,
                    },
                  })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <p>Career Stage interviewed for</p>
            </Grid>
            <Grid item xs={6}>
              <FormSelect
                items={CAREERSTAGES}
                label="Career Stage interviewed for"
                value={
                  candidateData.interviewData.candidateCareerStageInterviewedFor
                }
                onChange={(e) =>
                  setCandidateData({
                    ...candidateData,
                    interviewData: {
                      ...candidateData.interviewData,
                      candidateCareerStageInterviewedFor: e.target.value,
                    },
                  })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <p>Resume</p>
            </Grid>
            <Grid item xs={6}>
              <FormInput label="Experience" variant="standard" type="file" />
            </Grid>
          </Grid>

          <Divider />

          <Header> Interviewer Information</Header>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <p>Oracle ID </p>
            </Grid>
            <Grid item xs={6}>
              <FormInput
                label="Oracle ID"
                type="text"
                value={candidateData.interviewData.interviewerOracleId}
                onChange={(e) =>
                  setCandidateData({
                    ...candidateData,
                    interviewData: {
                      ...candidateData.interviewData,
                      interviewerOracleId: e.target.value,
                    },
                  })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <p>First Name</p>
            </Grid>
            <Grid item xs={6}>
              <FormInput
                label="First Name"
                type="text"
                value={candidateData.interviewData.interviewerFirstName}
                onChange={(e) =>
                  setCandidateData({
                    ...candidateData,
                    interviewData: {
                      ...candidateData.interviewData,
                      interviewerFirstName: e.target.value,
                    },
                  })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <p>Last Name</p>
            </Grid>
            <Grid item xs={6}>
              <FormInput
                label="Last Name"
                type="text"
                value={candidateData.interviewData.interviewerLastName}
                onChange={(e) =>
                  setCandidateData({
                    ...candidateData,
                    interviewData: {
                      ...candidateData.interviewData,
                      interviewerLastName: e.target.value,
                    },
                  })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <p>Email</p>
            </Grid>
            <Grid item xs={6}>
              <FormInput
                label="Email"
                type="email"
                value={candidateData.interviewData.interviewerEmail}
                onChange={(e) =>
                  setCandidateData({
                    ...candidateData,
                    interviewData: {
                      ...candidateData.interviewData,
                      interviewerEmail: e.target.value,
                    },
                  })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <p>Career Stage</p>
            </Grid>
            <Grid item xs={6}>
              <FormSelect
                items={CAREERSTAGES}
                label="Career Stage"
                value={candidateData.interviewData.interviewerCareerStage}
                onChange={(e) =>
                  setCandidateData({
                    ...candidateData,
                    interviewData: {
                      ...candidateData.interviewData,
                      interviewerCareerStage: e.target.value,
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

export default InterviewDetail;
