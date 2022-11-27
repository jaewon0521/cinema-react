/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import palette from "lib/palette";
import { movieDetailState } from "module/reducers/movieDetailsSlice";
import { v4 as uuidv4 } from "uuid";
import { IMAGE_URL } from "api/service";

type Props = {
  details: movieDetailState["details"];
};

const Crew = ({ details }: Props) => {
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
        {details.credits.crew.map((data) => (
          <tbody key={uuidv4()}>
            <tr>
              <td>
                <img
                  src={data.profile_path ? `${IMAGE_URL}${data.profile_path}` : "https://via.placeholder.com/50x80"}
                  alt=""
                  width="50px"
                  height="80px"
                />
              </td>
              <td>{data.name}</td>
              <td>{data.department}</td>
              <td>{data.job}</td>
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
