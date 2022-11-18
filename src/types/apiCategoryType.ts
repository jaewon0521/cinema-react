export const API_TYPE = {
  NOW_PLAYING: "now_playing",
  POPULAR: "popular",
  TOP_RATED: "top_rated",
  UPCOMING: "upcoming",
} as const;

export type MovieApiItemType = typeof API_TYPE[keyof typeof API_TYPE];
