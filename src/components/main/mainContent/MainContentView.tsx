/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import { MovieListlResponseType } from "types/apiResponseType";
import Grid from "components/common/Grid";
import SliderShow from "components/common/SliderShow";
import MainPaginate from "../mainPaginate/MainPaginate";

type Props = {
  randomImageList: { id: number; url: string }[];
  currentMovieType: string;
  list: MovieListlResponseType[];
  $observerTarget: React.RefObject<HTMLDivElement>;
};

const MainContentView = ({ randomImageList, currentMovieType, list, $observerTarget }: Props) => {
  return (
    <div>
      <SliderShow imageList={randomImageList} />
      <div css={movieTitle}>
        <div className="movieType">{currentMovieType}</div>
        <MainPaginate />
      </div>
      <Grid movies={list} />
      <div ref={$observerTarget}></div>
    </div>
  );
};

const movieTitle = css`
  display: grid;
  grid-template-areas: "movieType . paginate";
  grid-template-columns: max-content 1fr max-content;
  grid-template-rows: 1fr;
  margin: 30px 0;
  font-size: 18px;
  color: #fff;
  width: inherit;

  .movieType {
    grid-area: movieType;
    text-align: left;
    padding: 8px 25px;
  }

  .paginate {
    grid-area: paginate;
    text-align: right;
    padding-right: 25px;
  }
`;

export default MainContentView;
