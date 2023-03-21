/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import media from "lib/styles/media";
import { MovieDetailState } from "module/reducers/movieDetailsSlice";
import { IMAGE_URL_W185 } from "api/service";

type Props = {
  details: MovieDetailState[keyof MovieDetailState];
};

const Overview = ({ details }: Props) => {
  return (
    <div css={overview}>
      <div css={overviewColumn1}>
        <div className="description">{details.movieInfo.overview}</div>
        <div className="cast">
          <div className="div-title">배우</div>
          <table>
            {details.credits.cast.map((data, idx) => (
              <tbody key={idx}>
                <tr>
                  <td>
                    <img
                      src={
                        data.profile_path
                          ? `${IMAGE_URL_W185}${data.profile_path}`
                          : "https://via.placeholder.com/50x80"
                      }
                      alt="배우 이미지"
                      width="50px"
                      height="80px"
                    />
                  </td>
                  <td>{data.name}</td>
                  <td>{data.character}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
      <div css={overviewColumn2}>
        <div className="overview-detail">
          <h6>제작사</h6>
          {details.movieInfo.production_companies.map((company, idx) => (
            <div className="product-company" key={idx}>
              <img
                src={company.logo_path ? `${IMAGE_URL_W185}${company.logo_path}` : "https://via.placeholder.com/30x30"}
                alt="제작사 로고"
                width="30px"
                height="30px"
              />
              <span>{company.name}</span>
            </div>
          ))}
        </div>
        <div className="overview-detail">
          <h6>언어</h6>
          <p>
            {details.movieInfo.spoken_languages.map((language, idx) => (
              <span key={idx}>{language.name}</span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

const overview = css`
  display: grid;
  grid-template-columns: 66.667% 33.334%;
  margin-top: 40px;

  ${media.medium} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const overviewColumn1 = css`
  color: #abb7c4;
  line-height: 24px;
  font-size: 14px;
  font-weight: 300;

  .cast {
    .div-title {
      color: #fff;
      font-size: 15px;
      font-weight: 700;
      border-bottom: 1px solid #233a50;
      height: 27px;
      line-height: 22.5px;
      margin: 30px 0 25px 0;
      padding-bottom: 30px;
    }

    table {
      background-color: inherit !important;
      border-collapse: collapse;
      width: 100%;
      font-size: 14px;
    }

    td,
    th {
      text-align: left;
      padding: 8px;
    }

    td:first-of-type {
      width: 70px;
      img {
        border-radius: 5px;
        margin-left: -5px;
      }
    }

    td:nth-of-type(2) {
      font-size: 16px;
      color: #4280bf;
    }
  }
`;
const overviewColumn2 = css`
  .overview-detail {
    margin-bottom: 30px;
    margin-left: 30px;
    font-size: 14px;
    color: #abb7c4;

    .product-company {
      margin-bottom: 10px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      img {
        width: 30px;
        height: 30px;
        line-height: 30px;
        margin-right: 6px;
      }

      span {
        line-height: 25px;
        font-weight: 300;
        width: auto;
        color: #4280bf;
        padding-right: 5px;
      }
    }

    h6 {
      font-weight: bold;
      text-transform: capitalize;
      margin-bottom: 10px;
    }

    p {
      font-weight: 300;
      text-transform: none;
      line-height: 24px;

      span {
        color: #4280bf;
        text-decoration: none;
        padding-right: 5px;
      }

      a:not(:last-child):after {
        content: ",";
      }
    }
  }

  ${media.medium} {
    margin-top: 30px;
  }
`;

export default Overview;
