import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCandidate,
  fetchCandidates,
  submitCandidate,
} from "./candidate.action";

export const initialState = Object.freeze({
  status: "idle",
  candidates: [],
  candidate: [],
  submitted: false,
});

const candidatesSlice = createSlice({
  name: "candidates",
  initialState,
  reducers: {
    resetIsSubmitted: (state) => {
      state.submitted = false;
    },
  },

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

    builder.addCase(fetchCandidate.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(fetchCandidate.fulfilled, (state, { payload }) => {
      state.status = "resolved";
      state.candidate = payload;
    });

    builder.addCase(fetchCandidate.rejected, (state) => {
      state.status = "rejected";
    });

    builder.addCase(submitCandidate.pending, (state) => {
      state.submitted = false;
    });

    builder.addCase(submitCandidate.fulfilled, (state, { payload }) => {
      state.submitted = true;
    });

    builder.addCase(submitCandidate.rejected, (state) => {
      state.status = false;
    });
  },
});
export const { resetIsSubmitted } = candidatesSlice.actions;

export default candidatesSlice.reducer;
