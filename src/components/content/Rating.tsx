/** @jsxImportSource @emotion/react */

import React, { useState, useEffect, Fragment, useRef } from "react";
import { css } from "@emotion/react";
import palette from "lib/palette";

type Props = {
  rating: number;
  totalStars: number;
};

const Rating = ({ rating, totalStars }: Props) => {
  const [numberOfStars, setNumberOfStars] = useState<Array<number>>([]);
  const ratingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const starsArray = Array.from({ length: totalStars })
      .fill(0)
      .map((_, i) => i + 1);

    let percentage;
    if (rating <= 5) {
      percentage = (rating / 5) * 25;
    } else {
      percentage = (rating / 10) * 25;
    }

    const starPercentage = `${Math.floor(percentage)}%`;
    if (ratingRef.current) {
      ratingRef.current.style.width = starPercentage;
      setNumberOfStars(starsArray);
    }
  }, [rating, totalStars]);
  return (
    <div css={starRating}>
      <div className="back-stars">
        {numberOfStars &&
          numberOfStars.map((i) => (
            <Fragment key={i}>
              <i className="fa fa-star" aria-hidden="true"></i>
            </Fragment>
          ))}
      </div>

      <div className="front-stars" ref={ratingRef}>
        {numberOfStars &&
          numberOfStars.map((i) => (
            <Fragment key={i}>
              <i className="fa fa-star" aria-hidden="true"></i>
            </Fragment>
          ))}
      </div>
    </div>
  );
};

const starRating = css`
  display: flex;

  .back-stars {
    display: flex;
    color: ${palette.grey[300]};
    position: relative;
  }

  .front-stars {
    display: flex;
    color: ${palette.yellow[100]};
    position: absolute;
    overflow: hidden;
  }
`;

export default Rating;
