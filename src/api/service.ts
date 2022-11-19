import axios from "axios";
import { MovieListResPonseType } from "../types/apiResponseType";

const REQUEST_URL = "https://api.themoviedb.org/3";
const REQUEST_LANGUAGE = "ko-KR";
const API_KEY = process.env.REACT_APP_APP_THEMOVIEDB_KEY;

export const IMAGE_URL = "https://image.tmdb.org/t/p/original";

export const MOIVE_API_URL = async (type: string, page: number) => {
  const response = await axios.get<MovieListResPonseType>(
    `${REQUEST_URL}/movie/${type}?api_key=${API_KEY}&language=${REQUEST_LANGUAGE}&page=${page}`
  );
  return response.data;
};

export const SEARCH_MOIVE_API_URL = async (query: string) => {
  const response = await axios.get<MovieListResPonseType>(
    `${REQUEST_URL}/search/movie?api_key=${API_KEY}&language=${REQUEST_LANGUAGE}&query=${query}`
  );
  return response.data;
};
