import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import BasicSelect from "../../components/dropdown";
import BasicDatePicker from "../../components/date-picker";
import { Header, ShadowBox } from "./style";
import BaseButton from "../../components/button";
import Divider from "@mui/material/Divider";
import { useForm } from "react-hook-form";
import FormInput from "../form-input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AutoCompleteBox from "../autocomplete/autocomplete-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/user/userAction";

const schema = yup.object().shape({
  firstName: yup.string().max(30).required(),
  lastName: yup.string().max(30).required(),
  phone: yup.number("Enter Phone number").required("Enter Phone number"),
  email: yup.string().email("Enter email").required(),
  experience: yup.number("Enter experince ").min(1).max(100).required(),
  resume: yup.string("Pleae add file").min(10).required(),
  date: yup.date().required(),
  interviewerFirstName: yup.string().max(30).required(),
  interviewerLastName: yup.string().max(30).required(),
  interviewerEmail: yup.string().max(30).required(),
});

const InterviewDetail = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const user = useSelector((state) => {
    return state.user.value;
  });
  const dispatch = useDispatch();
  const [reqDate, setReqDate] = useState();
  const [usersList, setUsersList] = React.useState([]);
  const [autovalue, setAutoValue] = React.useState("Search Oracle ID");
  const [mode, setMode] = React.useState("");
  const [type, setType] = React.useState("");

  const onSubmit = (data) => {
    console.log(errors);
    console.log(data);

    console.log({ ...data, type: type, mode: mode });
  };
  React.useEffect(() => {
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
      let selectedUserData = user.filter((user) => {
        return user.oracleId == autovalue.label;
      });

      setValue("interviewerFirstName", selectedUserData[0].firstName);
      setValue("interviewerLastName", selectedUserData[0].lastName);
      setValue("interviewerEmail", selectedUserData[0].email);
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
                  name="date"
                  error={!!errors.date}
                  helperText={errors?.date?.message}
                />
                <p>{!!errors.date && "Enter Date"}</p>
              </Grid>
              <Grid item xs={6}>
                <p>Mode</p>
              </Grid>
              <Grid item xs={6}>
                <BasicSelect
                  item={mode}
                  setItem={setMode}
                  items={[
                    { value: "In Person", key: "1" },
                    { value: "Teams Video", key: "2" },
                  ]}
                  label="Mode"
                />
              </Grid>
              <Grid item xs={6}>
                <p>Type</p>
              </Grid>
              <Grid item xs={6}>
                <BasicSelect
                  item={type}
                  setItem={setType}
                  items={[
                    { key: "3", value: "Core XT" },
                    { key: "4", value: "React JS" },
                  ]}
                  label="Type"
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
                  name="firstName"
                  {...register("firstName")}
                  error={!!errors.firstName}
                  helperText={errors?.firstName?.message}
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
                  name="lastName"
                  {...register("lastName", { required: true })}
                  error={!!errors.lastName}
                  helperText={errors?.lastName?.message}
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
                  name="phone"
                  {...register("phone", { required: true })}
                  error={!!errors.phone}
                  helperText={errors?.phone?.message}
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
                  name="email"
                  {...register("email", { required: true })}
                  error={!!errors.email}
                  helperText={errors?.email?.message}
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
                  name="experience"
                  {...register("experience", { required: true })}
                  error={!!errors.experience}
                  helperText={errors?.experience?.message}
                />
              </Grid>
              <Grid item xs={6}>
                <p>Career Stage interviewed for</p>
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={6}>
                <p>Resume</p>
              </Grid>
              <Grid item xs={6}>
                <FormInput
                  label="Resume"
                  variant="standard"
                  type="file"
                  size="small"
                  name="resume"
                  {...register("resume")}
                  error={!!errors.resume}
                  helperText={errors?.resume?.message}
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
                  inputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={6}>
                <p>Career Stage</p>
              </Grid>
              <Grid item xs={6}>
                <BasicSelect
                  items={[
                    { key: "31", value: "In Person" },
                    { key: "32", value: "Teams Video" },
                  ]}
                  label="Career Stage"
                  name="careerStage"
                  inputProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>
            <Divider />
            <BaseButton type="submit">Submit</BaseButton>
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
