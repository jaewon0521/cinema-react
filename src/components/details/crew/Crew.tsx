/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import palette from "lib/palette";

type Props = {};

const Crew = (props: Props) => {
  return (
    <div css={cast}>
      <div className="div-title">Crew</div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th className="head">Department</th>
            <th className="head">Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="" alt="" />
            </td>
            <td>Alan Silvestri</td>
            <td>Sound</td>
            <td>Original Music Composer</td>
          </tr>
        </tbody>
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

  td:first-child {
    width: 70px;
    img {
      border-radius: 5px;
      margin-left: -5px;
    }
  }

  td:nth-child(2) {
    font-size: 16px;
    color: #4280bf;
  }
`;

export default Crew;
