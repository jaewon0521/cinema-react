/** @jsxImportSource @emotion/react */

import React from "react";
import { v4 as uuidv4 } from "uuid";
import { css } from "@emotion/react";
import { MovieListlResponseType } from "types/apiResponseType";
import GridList from "./GridList";

type Props = {
  movies: MovieListlResponseType[];
};

const Grid = ({ movies }: Props) => {
  return (
    <div css={wrapper}>
      {movies.map((movie) => (
        <GridList key={uuidv4()} movie={movie} />
      ))}
    </div>
  );
};

const wrapper = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-auto-rows: 460px;
  row-gap: 5rem;
  column-gap: 2rem;
  margin: 10px 25px;
  margin-bottom: 50px;
`;

export default Grid;
