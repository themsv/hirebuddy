<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit';
import { fetchCandidates, submitCandidate } from './candidate.action';

export const initialState = Object.freeze({
	status: 'idle',
	candidates: [],
	submitted: false,
	activeId: '',
=======
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
  activeId: "",
>>>>>>> a649f019727987565cc73cea506bf416cc663c2d
});

const candidatesSlice = createSlice({
	name: 'candidates',
	initialState,
	reducers: {
		resetIsSubmitted: (state) => {
			state.submitted = false;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(fetchCandidates.pending, (state) => {
			state.status = 'pending';
		});

		builder.addCase(fetchCandidates.fulfilled, (state, { payload }) => {
			// debugger;
			state.status = 'resolved';
			state.candidates = payload;
		});

		builder.addCase(fetchCandidates.rejected, (state) => {
			state.status = 'rejected';
		});

<<<<<<< HEAD
		builder.addCase(submitCandidate.pending, (state) => {
			state.submitted = false;
		});
=======
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
>>>>>>> a649f019727987565cc73cea506bf416cc663c2d

		builder.addCase(submitCandidate.fulfilled, (state, { payload }) => {
			state.submitted = true;
			state.candidates.push(payload);
			state.activeId = payload.id;
		});

		builder.addCase(submitCandidate.rejected, (state) => {
			state.status = false;
		});
	},
});
export const { resetIsSubmitted } = candidatesSlice.actions;

export default candidatesSlice.reducer;
