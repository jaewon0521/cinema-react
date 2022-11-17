import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieApiType } from "module/types";
import { API_TYPE } from "types/apiCategoryType";

interface MovieTypeState {
  type: MovieApiType;
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
