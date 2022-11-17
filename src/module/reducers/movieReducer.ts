import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieListResPonseType } from "api/type";
import { IMovieList } from "module/types";
import { API_TYPE } from "types/apiCategoryType";
import { getMovieList, loadmoreMovieList } from "module/action";

interface MovieState {
  movies: IMovieList;
  loading: boolean;
  error: string | null;
}

const initialState: MovieState = {
  movies: {
    list: [],
    page: 1,
    totalPages: 0,
    movieType: API_TYPE.NOW_PLAYING,
  },
  loading: true,
  error: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    responsePage: (state, action) => {
      const { movies } = state;
      movies.page = action.payload.page;
      movies.totalPages = action.payload.totalPages;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovieList.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getMovieList.fulfilled, (state, action: PayloadAction<MovieListResPonseType>) => {
        const { movies } = state;
        state.error = null;
        state.loading = false;
        movies.list = action.payload.results;
        movies.page = action.payload.page;
        movies.totalPages = action.payload.total_pages;
      })
      .addCase(getMovieList.rejected, (state, action) => {
        state.error = action.payload?.errorMessage!;
        state.loading = false;
      })
      .addCase(loadmoreMovieList.fulfilled, (state, action: PayloadAction<MovieListResPonseType>) => {
        const { movies } = state;
        movies.list = [...movies.list, ...action.payload.results];
        movies.page = action.payload.page;
        movies.totalPages = action.payload.total_pages;
      });
  },
});

export const { responsePage } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
