import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import { useLocation, useParams } from "react-router-dom";
import { fetchCandidate } from "../../store/candidate/candidate.action";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/spinner";

const Userdetails = () => {
  const dispatch = useDispatch();
  const candidate = useSelector((state) => {
    return state.candidates;
  });

  const params = useParams();

  useEffect(() => {
    dispatch(fetchCandidate(params.id));
  }, [params]);
  //console.log(candidate.candidate[0].interviewData);
  return (
    <div>
      {candidate.status === "loading" ? (
        <Spinner />
      ) : (
        <Card sx={{ maxWidth: 950, margin: "auto", marginTop: 5 }}>
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
                    value={candidate.candidate[0]?.interviewData?.interviewDate}
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
                    value={candidate.candidate[0]?.interviewData?.interviewMode}
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
                    value={candidate.candidate[0]?.interviewData?.interviewType}
                    disabled
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion>
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
                    value={
                      candidate.candidate[0]?.interviewData?.interviewerOracleId
                    }
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
                    value={
                      candidate.candidate[0]?.interviewData?.candidateFirstName
                    }
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
                    value={
                      candidate.candidate[0]?.interviewData?.candidateLastName
                    }
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
                    value={
                      candidate.candidate[0]?.interviewData?.candidatePhone
                    }
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
                    value={
                      candidate.candidate[0]?.interviewData?.candidateEmail
                    }
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
                    value={
                      candidate.candidate[0]?.interviewData?.candidateExperience
                    }
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
                    value={
                      candidate.candidate[0]?.interviewData?.candidatePhone
                    }
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
                      candidate.candidate[0]?.interviewData
                        ?.candidateCareerStageInterviewedFor
                    }
                    disabled
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          {/* <Accordion>
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
            {data && (
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
                      value={data.finalFeedback.feedback}
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
                      value={data.finalFeedback.outcome}
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
                      value={data.finalFeedback.interviewedBy}
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
                      value={data.finalFeedback.relaventExperience}
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
                      value={data.finalFeedback.recommendedCareerStage}
                      disabled
                    />
                  </Grid>
                </Grid>
              </AccordionDetails>
            )}
          </Accordion> */}
        </Card>
      )}
    </div>
  );
};

export default Userdetails;
