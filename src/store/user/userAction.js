import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async (userData, thunkAPI) => {
    const { email, otp } = userData;
    try {
      const res = await axios(`${process.env.REACT_APP_SERVER_URL}users`);
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
