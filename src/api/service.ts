import axios from "axios";
import { MovieListResPonseType } from "./type";

const REQUEST_URL = "https://api.themoviedb.org/3";

export const IMAGE_URL = "https://image.tmdb.org/t/p/original";
const API_KEY = process.env.REACT_APP_APP_THEMOVIEDB_KEY;

export const MOIVE_API_URL = async (type: string, page: number) => {
  const response = await axios.get<MovieListResPonseType>(
    `${REQUEST_URL}/movie/${type}?api_key=${API_KEY}&language=ko-KR&page=${page}`
  );
  return response.data;
};
