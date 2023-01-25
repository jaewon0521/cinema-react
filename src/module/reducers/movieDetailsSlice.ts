import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMovieDetails } from "module/action";
import {
  MovieCreditResponseType,
  MovieDetailsResponseType,
  MovieImageResponseType,
  MovieReviewsRsponseType,
} from "types/apiResponseType";

export type MovieDetailState = {
  details: {
    movieInfo: MovieDetailsResponseType;
    credits: MovieCreditResponseType;
    images: MovieImageResponseType;
    reviews: MovieReviewsRsponseType;
  };
};

const initialState = {
  details: {},
} as MovieDetailState;

export const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {
    clearDetailsMovie: (state) => {
      state.details = {} as MovieDetailState["details"];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovieDetails.fulfilled, (state, action: PayloadAction<MovieDetailState["details"]>) => {
      state.details = action.payload;
    });
  },
});

export const { clearDetailsMovie } = movieDetailsSlice.actions;

export const movieDetailReducer = movieDetailsSlice.reducer;
