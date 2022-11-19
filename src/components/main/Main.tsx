/** @jsxImportSource @emotion/react */

import React, { useCallback } from "react";
import { css } from "@emotion/react";
import MainContent from "components/content/MainContent";
import palette from "lib/palette";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "module/store";
import Spinner from "components/common/Spinner";
import { getMoreMovieList } from "module/action";
import useInfinityScroll from "hook/useInfinityScroll";
import SearchResult from "components/SearchResult/SearchResult";

const Main = () => {
  const { movies, searchResult, searchQuery, error } = useSelector((state: RootState) => state.movies);
  const { type } = useSelector((state: RootState) => state.movieType);
  const dispatch = useAppDispatch();

  const fechData = useCallback(() => {
    if (searchResult.length) return;

    if (movies.page < movies.totalPages) {
      let pageNumber = movies.page + 1;
      dispatch(getMoreMovieList({ type, pageNumber }));
    }
  }, [movies, type, dispatch, searchResult]);

  const $observerTarget = useInfinityScroll(fechData);

  if (movies.list.length === 0) {
    return <Spinner />;
  }

  if (error) {
    return <div>오류인데요?</div>;
  }

  return (
    <>
      <div css={wrapper}>
        {searchResult.length === 0 ? (
          <MainContent list={movies.list} page={movies.page} totalPages={movies.totalPages} movieType={type} />
        ) : (
          <SearchResult list={searchResult} keyWord={searchQuery} />
        )}
        <div ref={$observerTarget}></div>
      </div>
    </>
  );
};

const wrapper = css`
  text-align: center;
  background-color: ${palette.black[200]};
  /* overflow-y: auto; */
`;

export default React.memo(Main);
