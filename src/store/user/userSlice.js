import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./userAction.js";

const initialState = {
  loading: false,
  value: {},
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUser: (state) => {
      state.value = {};
    },
  },
  extraReducers: (builders) => {
    builders.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builders.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
      state.error = "";
    });
    builders.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.value = {};
      state.error = action.error.message;
    });
  },
});

export const { removeUser } = userSlice.actions;
export default userSlice.reducer;
