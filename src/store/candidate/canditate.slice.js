import { createSlice } from "@reduxjs/toolkit";
import { fetchCandidates, submitCandidate } from "./candidate.action";

export const initialState = Object.freeze({
  status: "idle",
  candidates: [],
});

const candidatesSlice = createSlice({
  name: "candidates",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCandidates.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(fetchCandidates.fulfilled, (state, { payload }) => {
      state.status = "resolved";
      state.candidates.push(payload);
    });

    builder.addCase(fetchCandidates.rejected, (state) => {
      state.status = "rejected";
    });

    builder.addCase(submitCandidate.pending, (state) => {
      debugger;
      state.status = "pending";
    });

    builder.addCase(submitCandidate.fulfilled, (state, { payload }) => {
      debugger;
      state.status = "resolved";
      state.candidates.push(payload);
    });

    builder.addCase(submitCandidate.rejected, (state) => {
      debugger;
      state.status = "rejected";
    });
  },
});

export default candidatesSlice.reducer;
