import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import BasicSelect from "../../components/dropdown";
import BasicDatePicker from "../../components/date-picker";
import { Header, ShadowBox } from "./style";
import BaseButton from "../../components/button";
import Divider from "@mui/material/Divider";
import FormInput from "../form-input";
import AutoCompleteBox from "../autocomplete/autocomplete-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/user/userAction";
import FormSelect from "../form-select";
import { CAREERSTAGES } from "../../constants/common";

const InterviewDetail = ({
  onSubmit,
  setValue,
  errors,
  handleSubmit,
  control,
  register,
  candidateData,
}) => {
  const user = useSelector((state) => {
    return state.user.users;
  });
  const dispatch = useDispatch();
  const [reqDate, setReqDate] = useState();
  const [usersList, setUsersList] = React.useState([]);
  const [autovalue, setAutoValue] = React.useState("Search Oracle ID");

  React.useEffect(() => {
    console.log("In useEffect");
    dispatch(fetchUsers());
  }, []);

  React.useEffect(() => {
    if (user.length > 0) {
      let usersList = user.map((user) => {
        return {
          label: user.oracleId + "",
        };
      });
      setUsersList(usersList);
    }
  }, [user]);

  React.useEffect(() => {
    if (autovalue !== undefined && user.length > 0) {
      let selectedUserData = user.filter((eachuser) => {
        return eachuser.oracleId == autovalue.label;
      });
      console.log(selectedUserData);
      if (selectedUserData.length > 0) {
        setValue("interviewerOracleId", selectedUserData[0].oracleId);
        setValue("interviewerFirstName", selectedUserData[0].firstName);
        setValue("interviewerLastName", selectedUserData[0].lastName);
        setValue("interviewerEmail", selectedUserData[0].email);
        setValue("interviewerCareerStage", selectedUserData[0].carrerStage);
      }
    }
  }, [autovalue]);

  return (
    <React.Fragment>
      <CssBaseline />
      <br></br>
      <Container maxWidth="md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <ShadowBox>
            <Header>Interview Details</Header>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <p>Date</p>
              </Grid>
              <Grid item xs={6}>
                <BasicDatePicker
                  setreqDate={setReqDate}
                  control={control}
                  size="small"
                  name="interviewDate"
                  error={!!errors.interviewDate}
                  helperText={errors?.interviewDate?.message}
                />
                <p>{!!errors.interviewDate && "Enter Date"}</p>
              </Grid>
              <Grid item xs={6}>
                <p>Mode</p>
              </Grid>
              <Grid item xs={6}>
                <FormSelect
                  items={[
                    { value: "In Person", key: "1" },
                    { value: "Teams Video", key: "2" },
                  ]}
                  {...register("interviewMode")}
                  label="Mode"
                  error={!!errors.interviewMode}
                  helperText={errors?.interviewMode?.message}
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
                  {...register("interviewType")}
                  label="Type"
                  error={!!errors.interviewType}
                  helperText={errors?.interviewType?.message}
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
                  label="First Name"
                  variant="outlined"
                  type="text"
                  size="small"
                  name="candidateFirstName"
                  {...register("candidateFirstName")}
                  error={!!errors.candidateFirstName}
                  helperText={errors?.candidateFirstName?.message}
                />
              </Grid>
              <Grid item xs={6}>
                <p>Last Name</p>
              </Grid>
              <Grid item xs={6}>
                <FormInput
                  label="Last Name"
                  variant="outlined"
                  type="text"
                  size="small"
                  name="candidateLastName"
                  {...register("candidateLastName", { required: true })}
                  error={!!errors.candidateLastName}
                  helperText={errors?.candidateLastName?.message}
                />
              </Grid>
              <Grid item xs={6}>
                <p>Phone</p>
              </Grid>
              <Grid item xs={6}>
                <FormInput
                  label="Phone"
                  variant="outlined"
                  type="number"
                  size="small"
                  name="candidatePhone"
                  {...register("candidatePhone", { required: true })}
                  error={!!errors.candidatePhone}
                  helperText={errors?.candidatePhone?.message}
                />
              </Grid>
              <Grid item xs={6}>
                <p>Email</p>
              </Grid>
              <Grid item xs={6}>
                <FormInput
                  label="Email"
                  variant="outlined"
                  type="email"
                  size="small"
                  name="candidateEmail"
                  {...register("candidateEmail", { required: true })}
                  error={!!errors.candidateEmail}
                  helperText={errors?.candidateEmail?.message}
                />
              </Grid>
              <Grid item xs={6}>
                <p>Experience</p>
              </Grid>
              <Grid item xs={6}>
                <FormInput
                  label="Experience"
                  variant="outlined"
                  type="number"
                  size="small"
                  name="candidateExperience"
                  {...register("candidateExperience", { required: true })}
                  error={!!errors.candidateExperience}
                  helperText={errors?.candidateExperience?.message}
                />
              </Grid>
              <Grid item xs={6}>
                <p>Career Stage interviewed for</p>
              </Grid>
              <Grid item xs={6}>
                <FormSelect
                  items={CAREERSTAGES}
                  {...register("candidateCareerStageInterviewedFor")}
                  label="Mode"
                  error={!!errors.candidateCareerStageInterviewedFor}
                  helperText={
                    errors?.candidateCareerStageInterviewedFor?.message
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <p>Resume</p>
              </Grid>
              <Grid item xs={6}>
                <FormInput
                  required="true"
                  label="Resume"
                  variant="standard"
                  type="file"
                  size="small"
                  name="candidateResume"
                  {...register("candidateResume")}
                  error={!!errors.candidateResume}
                  helperText={errors?.candidateResume?.message}
                />
              </Grid>
            </Grid>

            <Divider />

            <Header> Interviewer Information</Header>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <p>Oracle ID </p>
              </Grid>
              <Grid item xs={6}>
                <AutoCompleteBox
                  value={autovalue}
                  setValue={setAutoValue}
                  usersList={usersList}
                />
              </Grid>
              <Grid item xs={6}>
                <p>First Name</p>
              </Grid>
              <Grid item xs={6}>
                <FormInput
                  variant="outlined"
                  type="text"
                  size="small"
                  {...register("interviewerFirstName", { required: true })}
                  inputProps={{ readOnly: true }}
                  error={!!errors.interviewerFirstName}
                  helperText={errors?.interviewerFirstName?.message}
                />
              </Grid>
              <Grid item xs={6}>
                <p>Last Name</p>
              </Grid>
              <Grid item xs={6}>
                <FormInput
                  variant="outlined"
                  type="text"
                  size="small"
                  {...register("interviewerLastName", { required: true })}
                  inputProps={{ readOnly: true }}
                  error={!!errors.interviewerLastName}
                  helperText={errors?.interviewerLastName?.message}
                />
              </Grid>
              <Grid item xs={6}>
                <p>Email</p>
              </Grid>
              <Grid item xs={6}>
                <FormInput
                  variant="outlined"
                  type="text"
                  size="small"
                  {...register("interviewerEmail", { required: true })}
                  error={!!errors.interviewerEmail}
                  helperText={errors?.interviewerEmail?.message}
                />
              </Grid>
              <Grid item xs={6}>
                <p>Career Stage</p>
              </Grid>
              <Grid item xs={6}>
                <FormInput
                  variant="outlined"
                  type="text"
                  size="small"
                  {...register("interviewerCareerStage", { required: true })}
                  inputProps={{ readOnly: true }}
                  error={!!errors.interviewerCareerStage}
                  helperText={errors?.interviewerCareerStage?.message}
                />
              </Grid>
            </Grid>
            <Divider />
            <BaseButton type="submit" onClick={() => handleSubmit(onSubmit)}>
              Submit
            </BaseButton>
          </ShadowBox>
          {/* <Stack alignItems="flex-end">
          <br></br>
          <BaseButton variant="contained">Submit</BaseButton>
          <br></br>
        </Stack> */}
        </form>
      </Container>
    </React.Fragment>
  );
};

export default InterviewDetail;
