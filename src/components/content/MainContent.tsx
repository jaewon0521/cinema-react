/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React, { useState } from "react";
import Grid from "../common/Grid";
import Paginate from "../common/Paginate";
import SliderShow from "../common/SliderShow";

import SlideImage1 from "assets/Cinema_1.jpg";
import { MovieDetailResponseType } from "api/type";
import randomFourImages from "lib/utils/randomFourImages";

type props = {
  list: MovieDetailResponseType[];
  page: number;
  totalPages: number;
  movieType: string;
};

const images = [
  {
    url: SlideImage1,
    rating: 4.5,
  },
  {
    url: SlideImage1,
    rating: 3.5,
  },
  {
    url: SlideImage1,
    rating: 3.9,
  },
  {
    url: SlideImage1,
    rating: 4.8,
  },
  {
    url: SlideImage1,
    rating: 3.2,
  },
  {
    url: SlideImage1,
    rating: 4.2,
  },
];

const MainContent = ({ list, page, totalPages, movieType }: props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const randomImageList = randomFourImages(list);

  const handlePaginate = (type: string) => {
    if (type === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div css={mainContent}>
      <SliderShow imageList={randomImageList} />
      <div css={movieTitle}>
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate currentPage={page} totalPages={totalPages} onPaginate={handlePaginate} />
        </div>
      </div>
      <Grid images={images} />
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

export default MainContent;
