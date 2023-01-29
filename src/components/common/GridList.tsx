/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import { IMAGE_URL_W342 } from "api/service";
import palette from "lib/palette";
import { MovieListlResponseType } from "types/apiResponseType";
import LazyImage from "./LazyImage";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import formatTitle from "lib/utils/formatTitle";
type Props = {
  movie: MovieListlResponseType;
};

const GridList = ({ movie }: Props) => {
  const titleStr = formatTitle(movie.original_title);

  return (
    <div>
      {/* <LazyImage className={gridCell} src={`${IMAGE_URL}/${movie.poster_path}`}> */}
      <div css={gridCell}>
        <img src={`${IMAGE_URL_W342}/${movie.poster_path}`} alt={movie.title} width="440" height="500" />
        <div className="grid-read-more">
          <Link to={`${movie.id}/${titleStr}/details`} className="grid-cell-button">
            Read More
          </Link>
        </div>
        <div css={gridDetail}>
          <span className="grid-detail-title">{movie.title}</span>
          <div className="grid-detail-rating">
            <Rating rating={movie.vote_average} totalStars={10} />
            <div className="grid-vote-average">{movie.vote_average}</div>
          </div>
        </div>
      </div>
      {/* </LazyImage> */}
    </div>
  );
};

const gridCell = css`
  position: relative;
  display: grid;
  color: #fff;
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  transition: all 0.5s;

  img {
    width: 100%;
    object-fit: cover;
  }

  .grid-read-more {
    display: none;

    .grid-cell-button {
      background-color: ${palette.red[100]};
      padding: 8px 15px;
      text-transform: uppercase;
      color: #fff;
      border: none;
      border-radius: 30px;
      font-weight: bold;
      outline: none;

      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }

  &:hover {
    transform: translateY(-3px) scale(1.1);

    .grid-read-more {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, 50%);
      display: flex;
      background: rgba(49, 56, 64, 0.1);
      transition: all 0.3s ease-out;
    }
  }
`;

const gridDetail = css`
  position: absolute;
  bottom: 0;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  .grid-detail-title {
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
  }

  .grid-detail-rating {
    padding-top: 4px;
    display: flex;

    .grid-vote-average {
      color: #fff;
      margin-left: 10px;
      margin-top: -3px;
    }
  }
`;

export default React.memo(GridList);
