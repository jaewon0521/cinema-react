/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import MainContent from "components/content/MainContent";
import palette from "lib/palette";
import { useSelector } from "react-redux";
import { RootState } from "module/store";
import Spinner from "components/common/Spinner";

const Main = () => {
  const { movies, loading, error } = useSelector((state: RootState) => state.movies);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>오류인데요?</div>;
  }

  return (
    <div css={wrapper}>
      <MainContent list={movies.list} page={movies.page} totalPages={movies.totalPages} movieType={movies.movieType} />
    </div>
  );
};

const wrapper = css`
  text-align: center;
  height: 100vh;
  background-color: ${palette.black[200]};
  /* overflow-y: auto; */
`;

export default Main;
