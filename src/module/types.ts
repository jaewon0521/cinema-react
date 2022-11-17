import { MovieDetailResponseType } from "api/type";
import { API_TYPE } from "types/apiCategoryType";

export type MovieApiType = typeof API_TYPE[keyof typeof API_TYPE];

export interface IMovieList {
  list: MovieDetailResponseType[];
  page: number;
  totalPages: number;
  movieType: MovieApiType;
}

export const actionType = {
  MOVIE_LIST: "MOVIE/movieList",
  LOAD_MORE_MOVIE_LIST: "MOVIE/loadMoreMovieList",
  SET_ERROR: "ERROR/error",
} as const;
