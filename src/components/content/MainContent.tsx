/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React, { useState } from "react";
import Grid from "./Grid";
import Paginate from "./Paginate";
import SliderShow from "./SliderShow";

import SlideImage1 from "assets/Cinema_1.jpg";
type Props = {};

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

const MainContent = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePaginate = (type: string) => {
    if (type === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div css={mainContent}>
      <SliderShow />
      <div css={movieTitle}>
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={10} onPaginate={handlePaginate} />
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
  margin-bottom: 30px;
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
