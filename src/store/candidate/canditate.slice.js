import { createSlice } from "@reduxjs/toolkit";
import { fetchCandidates } from "./candidate.action";

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
      console.log(payload);
      state.candidates.push(payload);
    });

    builder.addCase(fetchCandidates.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

export default candidatesSlice.reducer;
