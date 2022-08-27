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
import { useFormControl } from "@mui/material";

const InterviewDetail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <React.Fragment>
      <CssBaseline />
      <br></br>
      <Container maxWidth="md">
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
                size="small"
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
                size="small"
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
                name="sachin"
                {...register("sachin")}
              />
            </Grid>
            <Grid item xs={6}>
              <p>Last Name</p>
            </Grid>
            <Grid item xs={6}>
              <FormInput
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                type="text"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <p>Phone</p>
            </Grid>
            <Grid item xs={6}>
              <FormInput
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                type="number"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <p>Email</p>
            </Grid>
            <Grid item xs={6}>
              <FormInput
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="number"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <p>Experience</p>
            </Grid>
            <Grid item xs={6}>
              <FormInput
                id="outlined-basic"
                label="Experience"
                variant="outlined"
                type="number"
                size="small"
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
                id="outlined-basic"
                label="Experience"
                variant="standard"
                type="file"
                size="small"
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
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                type="text"
              />
            </Grid>
            <Grid item xs={6}>
              <p>Last Name</p>
            </Grid>
            <Grid item xs={6}>
              <FormInput
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                type="text"
              />
            </Grid>
            <Grid item xs={6}>
              <p>Email</p>
            </Grid>
            <Grid item xs={6}>
              <FormInput
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="text"
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
          <BaseButton
            onClick={() => {
              onSubmit();
            }}
          >
            Submit
          </BaseButton>
        </ShadowBox>
        {/* <Stack alignItems="flex-end">
          <br></br>
          <BaseButton variant="contained">Submit</BaseButton>
          <br></br>
        </Stack> */}
      </Container>
    </React.Fragment>
  );
};

export default InterviewDetail;
