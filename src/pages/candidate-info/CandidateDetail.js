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
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import BaseButton from "../../components/button";
import TopicsList from "../../components/technical-round/components/topics";
import { CandidateDetailsDiv } from "./style";

const CandidateDetails = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const { candidateId } = useParams();
  const [selected, setSelected] = useState(null);

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
  const handleMore = (category) => {
    setSelected(category);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };
  return (
    <div data-testid="test-CandidateDetails">
      {candidate.loading === true ? (
        <Spinner />
      ) : (
        <Card
          sx={{
            maxWidth: 950,
            margin: "auto",
            marginTop: 5,
            marginBottom: 5,
            padding: 1,
          }}
        >
          {candidateById && (
            <>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    background: "rgba(0, 0, 0, 0.03)",
                    fontSize: "2rem",
                  }}
                >
                  <Typography variant="h6">Candidate Info</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={30}>
                    <Grid item xs={6}>
                      <p padding="1">First Name:</p>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-basic"
                        variant="standard"
                        fullWidth
                        type="text"
                        value={candidateById?.interviewData?.candidateFirstName}
                        disabled
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={30}>
                    <Grid item xs={6}>
                      <p>Last Name:</p>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-basic"
                        variant="standard"
                        fullWidth
                        type="text"
                        value={candidateById?.interviewData?.candidateLastName}
                        disabled
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={30}>
                    <Grid item xs={6}>
                      <p>Phone:</p>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-basic"
                        variant="standard"
                        fullWidth
                        type="text"
                        value={candidateById?.interviewData?.candidatePhone}
                        disabled
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={30}>
                    <Grid item xs={6}>
                      <p>Email:</p>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-basic"
                        variant="standard"
                        fullWidth
                        type="text"
                        value={candidateById?.interviewData?.candidateEmail}
                        disabled
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={30}>
                    <Grid item xs={6}>
                      <p>Experience:</p>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-basic"
                        variant="standard"
                        fullWidth
                        type="text"
                        value={
                          candidateById?.interviewData?.candidateExperience
                        }
                        disabled
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={30}>
                    <Grid item xs={6}>
                      <p>CareerStageInterviewedFor:</p>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-basic"
                        variant="standard"
                        fullWidth
                        type="text"
                        value={
                          candidateById?.interviewData
                            ?.candidateCareerStageInterviewedFor
                        }
                        disabled
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={30}>
                    <Grid item xs={6}>
                      <p>Resume:</p>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-basic"
                        variant="standard"
                        fullWidth
                        type="text"
                        value={candidateById?.interviewData?.candidateResume}
                        disabled
                      />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  sx={{
                    boxShadow: 9,

                    // border: "0.5px solid #000",
                    background: "rgba(0, 0, 0, 0.03)",
                  }}
                >
                  <Typography variant="h6">Interview Details</Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Grid container spacing={30}>
                    <Grid item xs={6}>
                      <p>Date:</p>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-basic"
                        variant="standard"
                        fullWidth
                        type="text"
                        value={candidateById?.interviewData?.interviewDate}
                        disabled
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={30}>
                    <Grid item xs={6}>
                      <p>Mode:</p>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-basic"
                        variant="standard"
                        fullWidth
                        type="text"
                        value={candidateById?.interviewData?.interviewMode}
                        disabled
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={30}>
                    <Grid item xs={6}>
                      <p>Type:</p>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-basic"
                        variant="standard"
                        fullWidth
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
                  aria-controls="panel3-content"
                  id="panel3-header"
                  sx={{
                    boxShadow: 9,
                    // border: "0.5px solid #000",
                    background: "rgba(0, 0, 0, 0.03)",
                  }}
                >
                  <Typography variant="h6">Interviewer Information</Typography>
                </AccordionSummary>
                {candidateById && (
                  <AccordionDetails>
                    <Grid container spacing={30}>
                      <Grid item xs={6}>
                        <p>Oracle Id:</p>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          margin="normal"
                          id="outlined-basic"
                          variant="standard"
                          fullWidth
                          type="text"
                          value={
                            candidateById.interviewData.interviewerOracleId
                          }
                          disabled
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={30}>
                      <Grid item xs={6}>
                        <p>First Name:</p>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          id="outlined-basic"
                          variant="standard"
                          fullWidth
                          type="text"
                          value={
                            candidateById.interviewData.interviewerFirstName
                          }
                          disabled
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={30}>
                      <Grid item xs={6}>
                        <p>Last Name:</p>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          id="outlined-basic"
                          variant="standard"
                          fullWidth
                          type="text"
                          value={
                            candidateById.interviewData.interviewerLastName
                          }
                          disabled
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={30}>
                      <Grid item xs={6}>
                        <p>Email:</p>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          id="outlined-basic"
                          variant="standard"
                          fullWidth
                          type="text"
                          value={candidateById.interviewData.interviewerEmail}
                          disabled
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={30}>
                      <Grid item xs={6}>
                        <p>Career Stage:</p>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          id="outlined-basic"
                          variant="standard"
                          fullWidth
                          type="text"
                          value={
                            candidateById.interviewData.interviewerCareerStage
                          }
                          disabled
                        />
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                )}
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4-content"
                  id="panel4-header"
                  sx={{
                    boxShadow: 9,
                    // border: "0.5px solid #000",
                    background: "rgba(0, 0, 0, 0.03)",
                  }}
                >
                  <Typography variant="h6">Final Feedback</Typography>
                </AccordionSummary>
                {candidateById && (
                  <AccordionDetails>
                    <Grid container spacing={30}>
                      <Grid item xs={6}>
                        <p>Feedback:</p>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          id="outlined-basic"
                          variant="standard"
                          fullWidth
                          type="text"
                          value={candidateById.finalFeedback.feedback}
                          disabled
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={30}>
                      <Grid item xs={6}>
                        <p>Outcome:</p>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          id="outlined-basic"
                          variant="standard"
                          fullWidth
                          type="text"
                          value={candidateById.finalFeedback.outcome}
                          disabled
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={30}>
                      <Grid item xs={6}>
                        <p>InterviewedBy:</p>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          id="outlined-basic"
                          variant="standard"
                          fullWidth
                          type="text"
                          value={`${candidateById.interviewData.interviewerFirstName}  ${candidateById.interviewData.interviewerLastName} `}
                          disabled
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={30}>
                      <Grid item xs={6}>
                        <p>RelaventExperience:</p>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          id="outlined-basic"
                          variant="standard"
                          fullWidth
                          type="text"
                          value={candidateById.finalFeedback.relaventExperience}
                          disabled
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={30}>
                      <Grid item xs={6}>
                        <p>RecommendedCareerStage:</p>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          margin="normal"
                          id="outlined-basic"
                          variant="standard"
                          fullWidth
                          type="text"
                          value={
                            candidateById.finalFeedback.recommendedCareerStage
                          }
                          disabled
                        />
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                )}
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5-content"
                  id="panel5-header"
                  sx={{
                    boxShadow: 9,
                    // border: "0.5px solid #000",
                    background: "rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <Typography variant="h6">Technical Round</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ paddingTop: 2 }}>
                  {candidateById &&
                    candidateById.score &&
                    candidateById.score.length > 0 &&
                    candidateById.score.map((item) => (
                      <Grid container>
                        <Grid item xs={6}>
                          <p>{item.title} :</p>
                        </Grid>
                        <Grid item xs={6}>
                          <CandidateDetailsDiv>
                            <Chip
                              data-testid="topic-score"
                              label={`Score ${item.score}`}
                              sx={{ minWidth: 85 }}
                            />
                            <span
                              className="primary-color"
                              style={{ marginLeft: "10px", cursor: "pointer" }}
                              onClick={() => handleMore(item)}
                            >
                              Know More
                            </span>
                          </CandidateDetailsDiv>
                        </Grid>
                      </Grid>
                    ))}
                </AccordionDetails>
              </Accordion>
            </>
          )}
          {!candidateById && (
            <h6 data-testid="data-not-found">No Data found for the given id</h6>
          )}
        </Card>
      )}
      <Dialog
        open={openModal}
        onClose={handleModalClose}
        data-testid="dialog"
        maxWidth="md"
      >
        <DialogTitle>{selected?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <TopicsList selectedCategory={selected} readonly={true} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <BaseButton variant="contained" onClick={handleModalClose}>
            close
          </BaseButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CandidateDetails;
