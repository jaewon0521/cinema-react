import { MovieDetailResponseType } from "types/apiResponseType";

export interface IMovieList {
  list: MovieDetailResponseType[];
  page: number;
  totalPages: number;
}

export const actionType = {
  MOVIE_LIST: "MOVIE/movieList",
  LOAD_MORE_MOVIE_LIST: "MOVIE/loadMoreMovieList",
  SET_ERROR: "ERROR/error",
} as const;
