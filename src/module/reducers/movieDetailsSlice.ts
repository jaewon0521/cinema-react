import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMovieDetails } from "module/action";
const initialState = {
  details: [],
};

export const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {
    clearDetailsMovie: (state, action) => {
      state.details = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovieDetails.fulfilled, (state, action: PayloadAction<any>) => {
      console.log(action, state);
    });
  },
});

export const movieDetailReducer = movieDetailsSlice.reducer;
