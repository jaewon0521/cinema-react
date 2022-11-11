/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React from "react";
import SliderShow from "./SliderShow";

type Props = {};

const MainContent = (props: Props) => {
  return (
    <div css={mainContent}>
      <SliderShow />
      <div css={movieTitle}>
        <div className="movieType">Now Playing</div>
        <div className="paginate">Paginate</div>
      </div>
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
