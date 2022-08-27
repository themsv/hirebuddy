import React from "react";
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
import { max } from "date-fns";

const schema = yup.object().shape({
  firstName: yup.string().max(30).required(),
  lastName: yup.string().max(30).required(),
  phone: yup.number().required(),
  email: yup.string().email().required(),
  experience: yup.number().min(1).max(100).required(),
  resume: yup.string().min(10).required(),
});

const InterviewDetail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(errors);
    console.log(data);
  };
  console.log(errors);
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
                <BasicDatePicker size="small" />
              </Grid>
              <Grid item xs={6}>
                <p>Mode</p>
              </Grid>
              <Grid item xs={6}>
                <BasicSelect
                  items={[
                    { key: "1", value: "In Person" },
                    { key: "2", value: "Teams Video" },
                  ]}
                  label="Mode"
                />
              </Grid>
              <Grid item xs={6}>
                <p>Type</p>
              </Grid>
              <Grid item xs={6}>
                <BasicSelect
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
              <Grid item xs={6}>
                <BasicSelect
                  items={[
                    { key: "12", value: "Junior Associate" },
                    { key: "13", value: "Associate L1" },
                    { key: "14", value: "Associate L2" },
                    { key: "15", value: "Sr. Associate L1" },
                    { key: "16", value: "Sr. Associate L2" },
                    { key: "17", value: "Manager" },
                    { key: "18", value: "Sr. Manager" },
                  ]}
                  label="Career Stage interviewed for"
                />
              </Grid>
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
                <BasicDatePicker />
              </Grid>
              <Grid item xs={6}>
                <p>First Name</p>
              </Grid>
              <Grid item xs={6}>
                <FormInput
                  label="First Name"
                  variant="outlined"
                  type="text"
                  size="small"
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
                />
              </Grid>
              <Grid item xs={6}>
                <p>Email</p>
              </Grid>
              <Grid item xs={6}>
                <FormInput
                  label="Email"
                  variant="outlined"
                  type="text"
                  size="small"
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
