/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Grid from "components/common/Grid";
import SliderShow from "components/common/SliderShow";
import React from "react";
import { MovieListlResponseType } from "types/apiResponseType";

type Props = {
  randomImageList: { id: number; url: string }[];
  keyWord: string;
  list: MovieListlResponseType[];
};

const SearchResultContentView = ({ randomImageList, keyWord, list }: Props) => {
  return (
    <div>
      <SliderShow imageList={randomImageList} />
      <div css={movieTitle}>
        <div className="movieType">검색 영화 : {keyWord}</div>
      </div>
      <Grid movies={list} />
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

export default SearchResultContentView;
