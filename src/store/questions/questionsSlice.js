import { createSlice } from "@reduxjs/toolkit";
import { fetchQuestions } from "./questionsAction";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(fetchQuestions.pending, (state) => {
      state.loading = true;
    });
    builders.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builders.addCase(fetchQuestions.rejected, (state, action) => {
      state.loading = false;
      state.data = {};
      state.error = action.error.message;
    });
  },
});
export default questionsSlice.reducer;
