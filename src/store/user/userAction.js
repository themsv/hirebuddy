import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// TODO: Need to add the APIUrl in env
const REACT_APP_URL = "http://localhost:3000/users";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(REACT_APP_URL);
      return data;
    } catch (err) {
      thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);
