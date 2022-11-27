/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import palette from "lib/palette";

type Props = {};

const Reviews = (props: Props) => {
  return (
    <div css={reviews}>
      <div className="div-title">Reviews 20</div>
      <div className="reviews-content">
        <h3>anonymous</h3>
        <div>This was an awesome moive. I lobed every bit of it.</div>
      </div>
    </div>
  );
};

const reviews = css`
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
