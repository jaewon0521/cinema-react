import { MovieDetailResponseType } from "api/type";
import { API_TYPE } from "types/apiType";

type MovieApiType = typeof API_TYPE[keyof typeof API_TYPE];

export interface IMovieList {
  list: MovieDetailResponseType[];
  page: number;
  totalPages: number;
  movieType: MovieApiType;
}

export const actionType = {
  MOVIE_LIST: "MOVIE/movieList",
  SET_ERROR: "ERROR/error",
  RESPONSE_PAGE: "MOIVE/responsePage",
  LOAD_MORE_RESULTS: "MOIVE/loadMoreResults",
  MOVIE_TYPE: "MOVIE/movieType",
} as const;
