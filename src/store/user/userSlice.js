import { createSlice } from "@reduxjs/toolkit";
import { fetchUser, fetchUsers } from "./userAction.js";

const initialState = {
  loading: false,
  value: {},
  users: {},
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
      state.value = "";
      state.error = action.payload;
    });

    builders.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builders.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builders.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = {};
      state.error = action.error.message;
    });
  },
});

export const { removeUser } = userSlice.actions;
export default userSlice.reducer;
