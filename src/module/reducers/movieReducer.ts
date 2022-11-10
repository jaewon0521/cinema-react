import { createSlice } from "@reduxjs/toolkit";

interface movieState {
  list: [];
}

const initialState: movieState = {
  list: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    list: (state) => {
      return state;
    },
  },
});

export const { list } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
