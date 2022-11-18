/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import palette from "lib/palette";
import useRatingStar from "hook/useRatingStar";

type RatingProps = {
  rating: number;
  totalStars: number;
};

const RatingList = () => {
  return <i className="fa fa-star" aria-hidden="true"></i>;
};

const Rating = ({ rating, totalStars }: RatingProps) => {
  const { numberOfStars, ratingRef } = useRatingStar(rating, totalStars);

  return (
    <div css={starRating}>
      <div className="back-stars">{numberOfStars && numberOfStars.map((i) => <RatingList key={i} />)}</div>

      <div className="front-stars" ref={ratingRef}>
        {numberOfStars && numberOfStars.map((i) => <RatingList key={i} />)}
      </div>
    </div>
  );
};

const starRating = css`
  display: flex;
  position: relative;

  .back-stars {
    display: flex;
    color: ${palette.grey[300]};
  }

  .front-stars {
    display: flex;
    color: ${palette.yellow[100]};
    position: absolute;
    overflow: hidden;
  }
`;

export default Rating;
