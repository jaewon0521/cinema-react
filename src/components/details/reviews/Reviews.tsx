/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import palette from "lib/palette";
import { MovieReviewsRsponseType } from "types/apiResponseType";
import { v4 as uuidv4 } from "uuid";

type Props = {
  reviews: MovieReviewsRsponseType;
};

// 현재 리뷰 API에 대해 데이터를 빈값으로 가지고 옴.
const Reviews = ({ reviews }: Props) => {
  return (
    <div css={reviewsWrapper}>
      <div className="div-title">Reviews {reviews.results.length > 0 ? reviews.results.length : 0} </div>
      {reviews.results.length ? (
        reviews.results.map((review) => (
          <div className="reviews-content" key={uuidv4()}>
            <h3>{review.author}</h3>
            <div>{review.content}</div>
          </div>
        ))
      ) : (
        <p>작성된 리뷰가 없습니다. (현재 리뷰 API 빈값으로 가지고옴.)</p>
      )}
    </div>
  );
};

const reviewsWrapper = css`
  .div-title {
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    border-bottom: 1px solid ${palette.blue[800]};
    height: 27px;
    line-height: 22.5px;
    margin: 30px 0 25px 0;
    padding-bottom: 30px;
  }

  .reviews-content {
    color: ${palette.grey[400]};
    line-height: 24px;
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 30px;
    text-align: justify;

    h3 {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 20px;
    }
  }

  p {
    color: ${palette.grey[400]};
    font-size: 16px;
  }
`;

export default Reviews;
