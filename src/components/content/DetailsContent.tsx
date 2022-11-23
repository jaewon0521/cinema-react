/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import media from "lib/styles/media";
import Rating from "components/common/Rating";
import Tabs from "components/details/Tabs";
import Overview from "components/overview/Overview";
import Crew from "components/crew/Crew";
import Media from "components/media/Media";
import Reviews from "components/reviews/Reviews";

type Props = {};

const DetailsContent = (props: Props) => {
  return (
    <div css={wrapper}>
      <div className="movie-bg">1</div>
      <div className="movie-overlay">1</div>
      <div css={movieDetails}>
        <div className="movie-image">
          <img src="" alt="" />
        </div>
        <div css={movieBody}>
          <div className="movie-overview">
            <div className="title">
              Avengers <span>2022-11-20</span>
            </div>
            <div className="movie-genres">
              <ul className="genres">
                <li>Action</li>
                <li>Comedy</li>
                <li>Sci-fi</li>
              </ul>
            </div>
            <div className="rating">
              <Rating rating={6.5} totalStars={10} /> &nbsp; <span>6.5</span> <p>(200) reviews</p>
            </div>
            <Tabs
              tabList={[
                { title: "overview", component: <Overview /> },
                { title: "crew", component: <Crew /> },
                { title: "media", component: <Media /> },
                { title: "reviews", component: <Reviews /> },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const wrapper = css`
  position: relative;

  .movie-bg,
  .movie-overlay {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  .movie-bg {
    width: 100%;
    height: 515px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .movie-overlay {
    background: rgba(0, 0, 0, 0.8);
    height: 515px;
    z-index: 2;
  }
`;

const movieDetails = css`
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-areas: "movieImage movieBody";
  grid-template-columns: 400px 1fr;
  grid-template-rows: 1fr;
  grid-gap: 10px;
  height: 100vh;
  padding-top: 200px;
  padding-right: 50px;
  padding-left: 50px;

  .movie-image {
    grid-area: movieImage;
    width: 330px;
    height: 550px;

    img {
      display: inline-block;
      max-height: 100%;
      max-width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  ${media.large} {
    grid-template-areas: "movieImage" "movieBody";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  ${media.custom(375)} {
    .movie-image {
      width: 230px;
      height: 450px;
    }
  }
`;

const movieBody = css`
  grid-area: movieBody;

  .movie-overview {
    height: auto;

    .title {
      margin-top: -10px;
      font-size: 36px;
      font-weight: 700;
      color: #ffffff;
      text-align: left;
      text-transform: uppercase;
      margin-bottom: 25px;

      span {
        font-size: 24px;
        font-weight: 300;
        color: #4f5b68;
      }
    }

    .movie-genres {
      .genres {
        height: 49px;
        line-height: 49px;
        display: flex;
        margin-bottom: 25px;

        li {
          list-style: none;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          color: #dd003f;
          padding-right: 35px;
          margin-left: -20px;
        }
      }
    }

    .rating {
      height: 49px;
      line-height: 49px;
      display: flex;
      font-size: 25px;
      margin-bottom: 90px;

      .fas {
        color: #f5b50a;
        padding-left: 4px;
      }

      span {
        color: #9aa9bb;
        margin-top: -10px;
      }

      p {
        color: #dd003f;
        margin-left: 10px;
        line-height: 30px;
        font-size: 18px;
      }
    }
  }

  ${media.custom(600)} {
    .movie-overview {
      .title {
        width: 348px;
        font-size: 16px;
        overflow-wrap: break-word;
        word-wrap: break-word;
        hyphens: auto;
        span {
          display: flex !important;
        }
      }

      .movie-genres {
        text-align: left;
        margin-bottom: 50px;

        .genres {
          display: inline-block;

          li {
            list-style: none;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            color: #dd003f;
          }
        }
      }
    }

    .rating {
      display: block !important;

      span {
        color: #9aa9bb;
        padding-top: 10px;
        float: left !important;
        margin-left: 3px !important;
      }

      p {
        color: #dd003f;
        float: left !important;
        padding-top: 10px;
      }
    }
  }
`;

export default DetailsContent;
