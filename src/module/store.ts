import { movieDetailReducer } from "./reducers/movieDetailsSlice";
import { movieReducer } from "./reducers/movieSlice";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { movieTypeReducer } from "./reducers/movieTypeSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    movieDetails: movieDetailReducer,
    movieType: movieTypeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
