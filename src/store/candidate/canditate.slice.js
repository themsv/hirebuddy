import { createSlice } from "@reduxjs/toolkit";
import { fetchCandidates } from "./candidate.action";

export const initialState = Object.freeze({
  status: "idle",
  candidates: ["sachin"],
});

const candidatesSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCandidates.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(fetchCandidates.fulfilled, (state, { payload }) => {
      state.status = "resolved";
      state.candidates = payload;
    });

    builder.addCase(fetchCandidates.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

export default candidatesSlice.reducer;
