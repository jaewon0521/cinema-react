import axios from "axios";
import {
  MovieCreditResponseType,
  MovieDetailsResponseType,
  MovieImageResponseType,
  MovieListResPonseType,
  MovieReviewsRsponseType,
} from "../types/apiResponseType";

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

export const MOIVE_DETAILS_URL = async (id: number) => {
  const response = await axios.get<MovieDetailsResponseType>(
    `${REQUEST_URL}/movie/${id}?api_key=${API_KEY}&language=${REQUEST_LANGUAGE}`
  );
  return response.data;
};

export const MOIVE_CREDITS_URL = async (id: number) => {
  const response = await axios.get<MovieCreditResponseType>(
    `${REQUEST_URL}/movie/${id}/credits?api_key=${API_KEY}&language=${REQUEST_LANGUAGE}`
  );
  return response.data;
};

export const MOIVE_IMAGES_URL = async (id: number) => {
  const response = await axios.get<MovieImageResponseType>(
    `${REQUEST_URL}/movie/${id}/images?api_key=${API_KEY}&language=${REQUEST_LANGUAGE}`
  );
  return response.data;
};

export const MOIVE_REVIWES_URL = async (id: number, page: number = 1) => {
  const response = await axios.get<MovieReviewsRsponseType>(
    `${REQUEST_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=${REQUEST_LANGUAGE}&page=${page}`
  );
  return response.data;
};
