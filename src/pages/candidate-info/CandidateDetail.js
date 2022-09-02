import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import { useParams } from "react-router-dom";
import { fetchCandidateById } from "../../store/candidate/candidate.action";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/spinner";

const CandidateDetails = () => {
  const dispatch = useDispatch();
  const { candidateId } = useParams();
  useEffect(() => {
    if (candidateId) dispatch(fetchCandidateById(candidateId));
    else {
      console.log("No id");
    }
  }, []);
  const candidate = useSelector((state) => {
    return state.candidates;
  });
  const { candidateById } = candidate;

  return (
    <div>
      {candidate.loading === true ? (
        <Spinner />
      ) : (
        <Card sx={{ maxWidth: 950, margin: "auto", marginTop: 5 }}>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                boxShadow: 9,

                border: "0.5px solid red",
                background: "#fe414d",
              }}
            >
              <Typography>CandidateInfo:</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={30}>
                <Grid item xs={6}>
                  <p>Id</p>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    variant="standard"
                    type="text"
                    value={candidateById?.interviewData?.interviewerOracleId}
                    disabled
                  />
                </Grid>
              </Grid>{" "}
              <Grid container spacing={30}>
                <Grid item xs={6}>
                  <p>FirstName</p>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    variant="standard"
                    type="text"
                    value={candidateById?.interviewData?.candidateFirstName}
                    disabled
                  />
                </Grid>
              </Grid>{" "}
              <Grid container spacing={30}>
                <Grid item xs={6}>
                  <p>LastName</p>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    variant="standard"
                    type="text"
                    value={candidateById?.interviewData?.candidateLastName}
                    disabled
                  />
                </Grid>
              </Grid>{" "}
              <Grid container spacing={30}>
                <Grid item xs={6}>
                  <p>Phone</p>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    variant="standard"
                    type="text"
                    value={candidateById?.interviewData?.candidatePhone}
                    disabled
                  />
                </Grid>
              </Grid>{" "}
              <Grid container spacing={30}>
                <Grid item xs={6}>
                  <p>Email</p>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    variant="standard"
                    type="text"
                    value={candidateById?.interviewData?.candidateEmail}
                    disabled
                  />
                </Grid>
              </Grid>{" "}
              <Grid container spacing={30}>
                <Grid item xs={6}>
                  <p>Experience</p>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    variant="standard"
                    type="text"
                    value={candidateById?.interviewData?.candidateExperience}
                    disabled
                  />
                </Grid>
              </Grid>{" "}
              <Grid container spacing={30}>
                <Grid item xs={6}>
                  <p>CareerStageInterviewedFor</p>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    variant="standard"
                    type="text"
                    value={candidateById?.interviewData?.candidatePhone}
                    disabled
                  />
                </Grid>
              </Grid>{" "}
              <Grid container spacing={30}>
                <Grid item xs={6}>
                  <p>Resume</p>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    variant="standard"
                    type="text"
                    value={
                      candidateById?.interviewData
                        ?.candidateCareerStageInterviewedFor
                    }
                    disabled
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                boxShadow: 9,

                border: "0.5px solid red",
                background: "#fe414d",
              }}
            >
              <Typography>InterviewDetails:</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Grid container spacing={30}>
                <Grid item xs={6}>
                  <p>Date</p>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    variant="standard"
                    type="text"
                    value={candidateById?.interviewData?.interviewDate}
                    disabled
                  />
                </Grid>
              </Grid>
              <Grid container spacing={30}>
                <Grid item xs={6}>
                  <p>Mode</p>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    variant="standard"
                    type="text"
                    value={candidateById?.interviewData?.interviewMode}
                    disabled
                  />
                </Grid>
              </Grid>
              <Grid container spacing={30}>
                <Grid item xs={6}>
                  <p>Type</p>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    variant="standard"
                    type="text"
                    value={candidateById?.interviewData?.interviewType}
                    disabled
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
              sx={{
                boxShadow: 9,
                border: "0.5px solid red",
                background: "#fe414d",
              }}
            >
              <Typography>FinalFeedback</Typography>
            </AccordionSummary>
            {candidateById && (
              <AccordionDetails>
                <Grid container spacing={30}>
                  <Grid item xs={6}>
                    <p>Feedback</p>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-basic"
                      variant="standard"
                      type="text"
                      value={candidateById.finalFeedback.feedback}
                      disabled
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={30}>
                  <Grid item xs={6}>
                    <p>Outcome</p>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-basic"
                      variant="standard"
                      type="text"
                      value={candidateById.finalFeedback.outcome}
                      disabled
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={30}>
                  <Grid item xs={6}>
                    <p>InterviewedBy</p>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-basic"
                      variant="standard"
                      type="text"
                      value={candidateById.finalFeedback.interviewedBy}
                      disabled
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={30}>
                  <Grid item xs={6}>
                    <p>relaventExperience</p>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-basic"
                      variant="standard"
                      type="text"
                      value={candidateById.finalFeedback.relaventExperience}
                      disabled
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={30}>
                  <Grid item xs={6}>
                    <p>RecommendedCareerStage</p>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      margin="normal"
                      id="outlined-basic"
                      variant="standard"
                      type="text"
                      value={candidateById.finalFeedback.recommendedCareerStage}
                      disabled
                    />
                  </Grid>
                </Grid>
              </AccordionDetails>
            )}
          </Accordion>
        </Card>
      )}
    </div>
  );
};

export default CandidateDetails;
