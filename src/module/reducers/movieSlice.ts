import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieDetailResponseType, MovieListResPonseType } from "types/apiResponseType";
import { getMovieList, loadMoreMovieList } from "module/action";

interface IMovieList {
  list: MovieDetailResponseType[];
  page: number;
  totalPages: number;
}

interface MovieState {
  movies: IMovieList;
  error: string | null;
}

const initialState: MovieState = {
  movies: {
    list: [],
    page: 1,
    totalPages: 0,
  },
  error: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovieList.fulfilled, (state, action: PayloadAction<MovieListResPonseType>) => {
        const { movies } = state;
        state.error = null;
        movies.list = action.payload.results;
        movies.page = action.payload.page;
        movies.totalPages = action.payload.total_pages;
      })
      .addCase(getMovieList.rejected, (state, action) => {
        state.error = action.payload?.errorMessage!;
      })
      .addCase(loadMoreMovieList.fulfilled, (state, action: PayloadAction<MovieListResPonseType>) => {
        const { movies } = state;
        movies.list = [...movies.list, ...action.payload.results];
        movies.page = action.payload.page;
        movies.totalPages = action.payload.total_pages;
      });
  },
});

export const movieReducer = movieSlice.reducer;
