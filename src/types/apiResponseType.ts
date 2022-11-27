export interface MovieListResPonseType {
  results: MovieListlResponseType[];
  page: number;
  total_pages: number;
}

export interface MovieListlResponseType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetailsResponseType {
  adult: boolean;
  backdrop_path: string;
  belong_to_collection: any;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: { id: number; logo_path: string; name: string; origin_country: string }[];
  production_countries: { iso_3166_1: string; name: string }[];
  title: string;
  vote_average: number;
  vote_count: number;
}

interface CreditType {
  adult: boolean;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

interface CastType extends CreditType {
  cast_id: number;
  character: string;
  order: number;
}

interface CrewType extends CreditType {
  department: string;
  job: string;
}
export interface MovieCreditResponseType {
  cast: CastType[];
  crew: CrewType[];
}

export interface MovieImageResponseType {
  backdrops: any;
  id: number;
  logos: any;
  posters: any;
}

export interface MovieReviesRsponseType {
  id: number;
  page: number;
  results: { total_pages: number; total_results: number }[];
}
