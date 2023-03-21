/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import palette from "lib/palette";
import { v4 as uuidv4 } from "uuid";
import { IMAGE_URL_ORIGIN } from "api/service";
import { MovieCreditResponseType } from "types/apiResponseType";

type Props = {
  credits: MovieCreditResponseType;
};

const Crew = ({ credits }: Props) => {
  return (
    <div css={cast}>
      <div className="div-title">제작진</div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th className="head">부서</th>
            <th className="head">역할</th>
          </tr>
        </thead>
        {credits.crew.map((crew, idx) => (
          <tbody key={idx}>
            <tr>
              <td>
                <img
                  src={
                    crew.profile_path ? `${IMAGE_URL_ORIGIN}${crew.profile_path}` : "https://via.placeholder.com/50x80"
                  }
                  alt=""
                  width="50px"
                  height="80px"
                />
              </td>
              <td>{crew.name}</td>
              <td>{crew.department}</td>
              <td>{crew.job}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

const cast = css`
  color: ${palette.grey[400]};

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

  table {
    background-color: inherit !important;
    border-collapse: collapse;
    width: 100%;
    font-size: 14px;
  }

  .head {
    color: #fff;
    font-size: 15px;
    font-weight: 700;
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
`;

export default Crew;
