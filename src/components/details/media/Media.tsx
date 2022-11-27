/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

type Props = {};

const Media = (props: Props) => {
  return (
    <div css={media}>
      <div>
        <div className="media-title">Watch Trailer</div>
        <div className="media-videos">
          <div className="video">
            <iframe
              title="Avengers"
              style={{
                width: "100%",
                height: "100%",
              }}
              src=""
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
      <div>
        <div className="media-title">Photos (10)</div>
        <div className="media-images">
          <div
            className="image-cell"
            style={{
              backgroundImage: ``,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const media = css`
  display: grid;
  grid-template-areas:
    "title"
    "images"
    "videos";
  grid-template-columns: 1fr;
  grid-template-rows: max-content;

  .media-title {
    grid-area: title;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    border-bottom: 1px solid #233a50;
    height: 27px;
    line-height: 22.5px;
    margin: 30px 0 25px 0;
    padding-bottom: 30px;
  }

  .media-videos {
    grid-area: videos;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, auto));
    row-gap: 1rem;
    column-gap: 1rem;

    .video {
      height: 313px;
    }

    .media-images {
      grid-area: images;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(330px, auto));
      row-gap: 1rem;
      column-gap: 0.5rem;

      .image-cell {
        width: 330px;
        height: 550px;
        transition: all 500ms;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

      .image-cell:hover {
        box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
        transform: translateY(-3px) scale(1.1);
      }
    }
  }
`;

export default Media;
