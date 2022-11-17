/** @jsxImportSource @emotion/react */

import React from "react";
import { v4 as uuidv4 } from "uuid";
import { css } from "@emotion/react";
import palette from "lib/palette";
import Rating from "./Rating";

type Props = {
  images: {
    url: string;
    rating: number;
  }[];
};

const Grid = ({ images }: Props) => {
  return (
    <>
      <div css={wrapper}>
        {images.map((image, idx) => (
          <div key={idx}>
            <div
              css={gridCell}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            >
              <div className="grid-read-more">
                <button className="grid-cell-button">Read More</button>
              </div>
              <div css={gridDetail}>
                <span className="grid-detail-title">Mission Impossible</span>
                <div className="grid-detail-rating">
                  <Rating rating={image.rating} totalStars={5} />
                  <div className="grid-vote-average">{image.rating}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
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

const gridCell = css`
  position: relative;
  display: grid;
  color: #fff;
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  transition: all 0.5s;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .grid-read-more {
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

export default Grid;
