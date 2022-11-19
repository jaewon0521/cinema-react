import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API_TYPE, MovieApiItemType } from "types/apiCategoryType";

interface MovieTypeState {
  type: MovieApiItemType;
}

const initialState: MovieTypeState = {
  type: API_TYPE.NOW_PLAYING,
};

export const movieTypeSlice = createSlice({
  name: "movieType",
  initialState,
  reducers: {
    changeMovieType: (state, action: PayloadAction<MovieTypeState>) => {
      state.type = action.payload.type;
    },
  },
});

export const { changeMovieType } = movieTypeSlice.actions;
export const movieTypeReducer = movieTypeSlice.reducer;
