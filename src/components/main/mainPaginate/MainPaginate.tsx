import { getMovieList } from "module/action";
import { RootState, useAppDispatch } from "module/store";
import React from "react";
import { useSelector } from "react-redux";
import MainPaginateView from "./MainPaginateView";

const MainPaginate = () => {
  const { page, totalPages } = useSelector((state: RootState) => state.movies.movies);
  const { type } = useSelector((state: RootState) => state.movieType);
  const dispatch = useAppDispatch();

  const handlePaginate = (btnType: string) => {
    if (btnType === "prev" && page > 1) {
      const prevPage = page - 1;
      dispatch(getMovieList({ type, pageNumber: prevPage }));
    } else {
      const nextPage = page + 1;
      dispatch(getMovieList({ type, pageNumber: nextPage }));
    }
  };

  const viewProps = {
    page,
    totalPages,
    onPaginate: handlePaginate,
  };

  return <MainPaginateView {...viewProps} />;
};

export default MainPaginate;
