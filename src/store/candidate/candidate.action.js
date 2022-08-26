import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCandidates = createAsyncThunk(
	'users/fetchCandidates',
	async (_, thunkAPI) => {
		try {
			const url = 'http://localhost:4000/candidates';
			const { data } = await axios.get(url);

			// console.log(data);
			return data;
		} catch (err) {
			thunkAPI.rejectWithValue(err.response.data.message);
		}
	}
);
