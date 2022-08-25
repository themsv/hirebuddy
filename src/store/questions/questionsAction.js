import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async (type, thunkAPI) => {
    try {
      const res = await axios(`${process.env.REACT_APP_SERVER_URL}questions`);
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
