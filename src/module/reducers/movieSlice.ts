import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieListlResponseType, MovieListResPonseType } from "types/apiResponseType";
import { getMovieList, getMoreMovieList, getSearchMovieList } from "module/action";

interface IMovieList {
  list: MovieListlResponseType[];
  page: number;
  totalPages: number;
}

interface MovieState {
  movies: IMovieList;
  error: string | null;
  searchQuery: string;
  searchResult: MovieListlResponseType[];
}

const initialState: MovieState = {
  movies: {
    list: [],
    page: 1,
    totalPages: 0,
  },
  searchQuery: "",
  searchResult: [],
  error: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    searchQueryChange: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    clearSearchResult: (state) => {
      state.searchResult = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovieList.fulfilled, (state, action: PayloadAction<MovieListResPonseType>) => {
        const { movies } = state;
        movies.list = action.payload.results;
        movies.page = action.payload.page;
        movies.totalPages = action.payload.total_pages;
        state.error = null;
      })
      .addCase(getMovieList.rejected, (state, action) => {
        state.error = action.payload?.errorMessage!;
      })
      .addCase(getMoreMovieList.fulfilled, (state, action: PayloadAction<MovieListResPonseType>) => {
        const { movies } = state;
        movies.list = [...movies.list, ...action.payload.results];
        movies.page = action.payload.page;
        movies.totalPages = action.payload.total_pages;
        state.error = null;
      })
      .addCase(getMoreMovieList.rejected, (state, action) => {
        state.error = action.payload?.errorMessage!;
      })
      .addCase(
        getSearchMovieList.fulfilled,
        (state, action: PayloadAction<MovieListResPonseType | { results: [] }>) => {
          state.searchResult = action.payload.results;
          state.error = null;
        }
      )
      .addCase(getSearchMovieList.rejected, (state, action) => {
        state.error = action.payload?.errorMessage!;
      });
  },
});

export const { searchQueryChange, clearSearchResult } = movieSlice.actions;

export const movieReducer = movieSlice.reducer;
