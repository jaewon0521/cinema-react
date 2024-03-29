import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  MOIVE_API_URL,
  MOIVE_CREDITS_URL,
  MOIVE_DETAILS_URL,
  MOIVE_IMAGES_URL,
  MOIVE_REVIWES_URL,
  SEARCH_MOIVE_API_URL,
} from "api/service";
import { MovieListResPonseType } from "types/apiResponseType";
import { AxiosError } from "axios";
import { MovieApiItemType } from "types/apiCategoryType";
import { actionType } from "./types";
import { MovieDetailState } from "./reducers/movieDetailsSlice";

type GetMovieListType = {
  type: MovieApiItemType;
  pageNumber: number;
};

type GetSearchMovieListType = {
  query: string;
};

type MyKnoewErrorType = {
  errorMessage: string;
};

export const getMovieList = createAsyncThunk<
  MovieListResPonseType,
  GetMovieListType,
  { rejectValue: MyKnoewErrorType }
>(actionType.MOVIE_LIST, async ({ type, pageNumber }, { rejectWithValue }) => {
  try {
    const response = await MOIVE_API_URL(type, pageNumber);
    return response;
  } catch (err) {
    const error = err as AxiosError;
    return rejectWithValue({ errorMessage: error.message });
  }
});

export const getMoreMovieList = createAsyncThunk<
  MovieListResPonseType,
  GetMovieListType,
  { rejectValue: MyKnoewErrorType }
>(actionType.MOVIE_LOAD_MORE_LIST, async ({ type, pageNumber }, { rejectWithValue }) => {
  try {
    const response = await MOIVE_API_URL(type, pageNumber);
    return response;
  } catch (err) {
    const error = err as AxiosError;
    return rejectWithValue({ errorMessage: error.message });
  }
});

export const getSearchMovieList = createAsyncThunk<
  MovieListResPonseType | { results: [] },
  GetSearchMovieListType,
  { rejectValue: MyKnoewErrorType }
>(actionType.MOVIE_SEARCH_LIST, async ({ query }, { rejectWithValue }) => {
  try {
    if (query) {
      const response = await SEARCH_MOIVE_API_URL(query);
      return response;
    } else {
      return { results: [] };
    }
  } catch (err) {
    const error = err as AxiosError;
    return rejectWithValue({ errorMessage: error.message });
  }
});

interface GetMovieDetailsParam {
  id: number;
}

export const getMovieDetails = createAsyncThunk<
  MovieDetailState[keyof MovieDetailState],
  GetMovieDetailsParam,
  { rejectValue: MyKnoewErrorType }
>(actionType.MOVIE_DETAILS, async ({ id }, { rejectWithValue }) => {
  try {
    const [movieDetails, credits, images, reviews] = await Promise.all([
      MOIVE_DETAILS_URL(id),
      MOIVE_CREDITS_URL(id),
      MOIVE_IMAGES_URL(id),
      MOIVE_REVIWES_URL(id),
    ]);

    return { movieInfo: movieDetails, credits: credits, images: images, reviews: reviews };
  } catch (err) {
    const error = err as AxiosError;
    return rejectWithValue({ errorMessage: error.message });
  }
});
