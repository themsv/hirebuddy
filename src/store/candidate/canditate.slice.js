import { createSlice } from '@reduxjs/toolkit';
import { fetchCandidates, submitCandidate } from './candidate.action';

export const initialState = Object.freeze({
	status: 'idle',
	candidates: [],
	submitted: false,
	activeId: '',
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

		builder.addCase(submitCandidate.pending, (state) => {
			state.submitted = false;
		});

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
