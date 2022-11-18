import { API_TYPE, MovieApiItemType } from "types/apiCategoryType";

interface HeaderListType {
  id: number;
  iconClass: string;
  name: string;
  type: MovieApiItemType;
}

export type headerType = typeof HEADER_LIST[number];

export const HEADER_LIST: HeaderListType[] = [
  {
    id: 1,
    iconClass: "fas fa-film",
    name: "Now Playing",
    type: API_TYPE.NOW_PLAYING,
  },
  {
    id: 2,
    iconClass: "fas fa-fire",
    name: "Popular",
    type: API_TYPE.POPULAR,
  },
  {
    id: 3,
    iconClass: "fas fa-star",
    name: "Top Rated",
    type: API_TYPE.TOP_RATED,
  },
  {
    id: 4,
    iconClass: "fas fa-plus-square",
    name: "Upcoming",
    type: API_TYPE.UPCOMING,
  },
];
