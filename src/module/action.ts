import { createAsyncThunk } from "@reduxjs/toolkit";
import { MOIVE_API_URL } from "api/service";
import { MovieListResPonseType } from "types/apiResponseType";
import { AxiosError } from "axios";
import { MovieApiItemType } from "types/apiCategoryType";
import { actionType } from "./types";

type GetMoviListType = {
  type: MovieApiItemType;
  pageNumber: number;
};

type MyKnoewErrorType = {
  errorMessage: string;
};

export const getMovieList = createAsyncThunk<MovieListResPonseType, GetMoviListType, { rejectValue: MyKnoewErrorType }>(
  actionType.MOVIE_LIST,
  async ({ type, pageNumber }, { rejectWithValue }) => {
    try {
      const response = await MOIVE_API_URL(type, pageNumber);
      return response;
    } catch (err) {
      const error = err as AxiosError;
      return rejectWithValue({ errorMessage: error.message });
    }
  }
);

export const loadMoreMovieList = createAsyncThunk<
  MovieListResPonseType,
  GetMoviListType,
  { rejectValue: MyKnoewErrorType }
>(actionType.LOAD_MORE_MOVIE_LIST, async ({ type, pageNumber }, { rejectWithValue }) => {
  try {
    const response = await MOIVE_API_URL(type, pageNumber);
    return response;
  } catch (err) {
    const error = err as AxiosError;
    return rejectWithValue({ errorMessage: error.message });
  }
});
