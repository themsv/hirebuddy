import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCandidates = createAsyncThunk(
  "candidates/fetchCandidates",
  async (_, thunkAPI) => {
    try {
      const url = `${process.env.REACT_APP_SERVER_URL}candidates`;
      const { data } = await axios.get(url);

      return data;
    } catch (err) {
      thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchCandidate = createAsyncThunk(
  "candidates/fetchCandidate",
  async (id, thunkAPI) => {
    console.log(id);
    try {
      const url = `${process.env.REACT_APP_SERVER_URL}candidates`;
      const { data } = await axios.get(url);

      const candidateData = data.filter((data) => {
        return data.interviewData.interviewerOracleId == id;
      });
      console.log(candidateData);
      return candidateData;
    } catch (err) {
      thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);
export const submitCandidate = createAsyncThunk(
  "candidates/submitCandidate",
  async (candidateData, thunkAPI) => {
    try {
      const url = `${process.env.REACT_APP_SERVER_URL}candidates`;
      const { data } = await axios.post(url, candidateData);

      return data;
    } catch (err) {
      thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchCandidateById = createAsyncThunk(
  "candidates/fetchCandidateById",
  async (id, thunkAPI) => {
    console.log(id);
    try {
      const url = `${process.env.REACT_APP_SERVER_URL}candidates/${id}`;
      const { data } = await axios.get(url);
      return data;
    } catch (err) {
      thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);
