/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React, { useMemo } from "react";
import Grid from "../common/Grid";
import Paginate from "../common/Paginate";
import SliderShow from "../common/SliderShow";
import randomFourImages from "lib/utils/randomFourImages";
import { MovieDetailResponseType } from "types/apiResponseType";
import { useAppDispatch } from "module/store";
import { getMovieList } from "module/action";
import { MovieApiItemType } from "types/apiCategoryType";
import { HEADER_LIST } from "lib/constants";

type props = {
  list: MovieDetailResponseType[];
  page: number;
  totalPages: number;
  movieType: MovieApiItemType;
};

const MainContent = ({ list, page, totalPages, movieType }: props) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const randomImageList = useMemo(() => randomFourImages(list), []);
  const dispatch = useAppDispatch();

  const currentMovieType = HEADER_LIST.find((header) => header.type === movieType)?.name;

  const handlePaginate = (type: string) => {
    if (type === "prev" && page > 1) {
      const prevPage = page - 1;
      dispatch(getMovieList({ type: movieType, pageNumber: prevPage }));
    } else {
      const nextPage = page + 1;
      dispatch(getMovieList({ type: movieType, pageNumber: nextPage }));
    }
  };

  return (
    <div css={mainContent}>
      <SliderShow imageList={randomImageList} />
      <div css={movieTitle}>
        <div className="movieType">{currentMovieType}</div>
        <div className="paginate">
          <Paginate currentPage={page} totalPages={totalPages} onPaginate={handlePaginate} />
        </div>
      </div>
      <Grid movies={list} />
    </div>
  );
};

const mainContent = css``;

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

export default React.memo(MainContent);
