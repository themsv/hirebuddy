import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// TODO: Need to add the APIUrl in env
const REACT_APP_URL = "http://localhost:4000/";

export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async (type, thunkAPI) => {
    try {
      const res = await axios(`${REACT_APP_URL}questions`);
      let data = await res.data;
      if (data) {
        data = data[type];
      }
      return data;
    } catch (err) {
      thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);
