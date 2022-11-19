import { movieReducer } from "./reducers/movieSlice";
import { errorReducer } from "./reducers/errorSlice";
import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { changeMovieType, movieTypeReducer } from "./reducers/movieTypeSlice";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: changeMovieType,
  effect: async (action, listenerApi) => {
    console.log(action);
    console.log(listenerApi);

    await listenerApi.delay(5000);

    console.log(listenerApi.getState());
  },
});

export const store = configureStore({
  reducer: {
    error: errorReducer,
    movies: movieReducer,
    movieType: movieTypeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
