import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// TODO: Need to add the APIUrl in env
const REACT_APP_URL = "http://localhost:4000/";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (userData, thunkAPI) => {
    const { email, otp } = userData;
    try {
      const res = await axios(`${REACT_APP_URL}users`);
      const users = await res.data;
      const user = await users.filter(
        (user) => user.email === email && user.otp === Number(otp)
      );
      if (user.length === 1) {
        return user.reduce((acc, val) => acc);
      }
    } catch (err) {
      thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);
