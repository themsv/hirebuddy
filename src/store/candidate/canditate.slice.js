import { createSlice } from "@reduxjs/toolkit";

import {
  fetchCandidates,
  submitCandidate,
  fetchCandidateById,
} from "./candidate.action";

export const initialState = Object.freeze({
  status: "idle",
  candidates: [],
  submitted: false,
  activeId: "",
  loading: false,
  candidateById: "",
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
      // debugger;

      state.status = "resolved";

      state.candidates = payload;
    });

    builder.addCase(fetchCandidates.rejected, (state) => {
      state.status = "rejected";
    });

    builder.addCase(submitCandidate.pending, (state) => {
      state.submitted = false;
    });

    builder.addCase(submitCandidate.fulfilled, (state) => {
      state.submitted = true;
    });

    builder.addCase(submitCandidate.rejected, (state) => {
      state.status = false;
    });

    builder.addCase(fetchCandidateById.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchCandidateById.fulfilled, (state, { payload }) => {
      state.loading = false;

      state.candidateById = payload;
    });

    builder.addCase(fetchCandidateById.rejected, (state, action) => {
      state.loading = false;

      state.error = action.error.message;
    });
  },
});

export const { resetIsSubmitted } = candidatesSlice.actions;

export default candidatesSlice.reducer;
