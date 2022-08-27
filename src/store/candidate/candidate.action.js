import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCandidates = createAsyncThunk(
  "users/fetchCandidates",
  async (_, thunkAPI) => {
    try {
      const url = "http://localhost:4000/candidates";
      const { data } = await axios.get(url);

      return data;
    } catch (err) {
      thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const submitCandidate = createAsyncThunk(
  "users/submitCandidate",
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
