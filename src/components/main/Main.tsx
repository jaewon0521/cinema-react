/** @jsxImportSource @emotion/react */

import React, { useCallback, useState } from "react";
import { css } from "@emotion/react";
import MainContent from "components/content/MainContent";
import palette from "lib/palette";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "module/store";
import Spinner from "components/common/Spinner";
import { loadMoreMovieList } from "module/action";
import useInfinityScroll from "hook/useInfinityScroll";

const Main = () => {
  const { movies, loading, error } = useSelector((state: RootState) => state.movies);
  const [currentPage, setCurrentPage] = useState(movies.page);
  const dispatch = useAppDispatch();
  const fechData = useCallback(() => {
    if (movies.page < movies.totalPages) {
      let pageNumber = currentPage + 1;
      setCurrentPage((prev) => prev + 1);
      dispatch(loadMoreMovieList({ type: movies.movieType, pageNumber }));
    }
  }, [movies, dispatch, currentPage]);
  const $observerTarget = useInfinityScroll(loading, fechData);
  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>오류인데요?</div>;
  }

  return (
    <>
      <div css={wrapper}>
        <MainContent
          list={movies.list}
          page={movies.page}
          totalPages={movies.totalPages}
          movieType={movies.movieType}
        />
      </div>
      <div ref={$observerTarget}></div>
    </>
  );
};

const wrapper = css`
  text-align: center;
  background-color: ${palette.black[200]};
  /* overflow-y: auto; */
`;

export default Main;
