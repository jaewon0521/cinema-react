import { createAsyncThunk } from "@reduxjs/toolkit";
import { MOIVE_API_URL } from "api/service";
import { MovieListResPonseType } from "api/type";
import { AxiosError } from "axios";
import { actionType } from "./types";

type GetMoviListType = {
  type: string;
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

export const loadmoreMovieList = createAsyncThunk<
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
