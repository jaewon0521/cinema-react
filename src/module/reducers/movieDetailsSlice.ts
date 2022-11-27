import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMovieDetails } from "module/action";
import {
  MovieCreditResponseType,
  MovieDetailsResponseType,
  MovieImageResponseType,
  MovieReviewsRsponseType,
} from "types/apiResponseType";

export interface movieDetailState {
  details: {
    movieInfo: MovieDetailsResponseType;
    credits: MovieCreditResponseType;
    images: MovieImageResponseType;
    reviews: MovieReviewsRsponseType;
  };
}

const initialState = {
  details: {},
} as movieDetailState;

export const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {
    clearDetailsMovie: (state) => {
      state.details = {} as movieDetailState["details"];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovieDetails.fulfilled, (state, action: PayloadAction<movieDetailState["details"]>) => {
      state.details = action.payload;
    });
  },
});

export const { clearDetailsMovie } = movieDetailsSlice.actions;

export const movieDetailReducer = movieDetailsSlice.reducer;
