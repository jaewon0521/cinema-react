/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import palette from "lib/palette";

type Props = {
  currentPage: number;
  totalPages: number;
  onPaginate: (type: string) => void;
};

const Paginate = ({ currentPage, totalPages, onPaginate }: Props) => {
  return (
    <>
      <span css={pageCount}>
        {currentPage} - {totalPages}
      </span>
      <button css={currentPage > 1 ? paginateButton : [paginateButton, disable]} onClick={() => onPaginate("prev")}>
        이전
      </button>
      <button
        css={currentPage === totalPages ? [paginateButton, disable] : paginateButton}
        onClick={() => onPaginate("next")}
      >
        다음
      </button>
    </>
  );
};

const pageCount = css`
  color: #fff;
  margin: 0 5px;
  padding: 10px 5px;
`;

const paginateButton = css`
  background-color: ${palette.red[100]};
  padding: 8px 15px;
  text-transform: uppercase;
  color: #fff;
  border: none;
  border-radius: 30px;
  margin: 0 15px;
  outline: none !important;
`;

const disable = css`
  cursor: none;
  pointer-events: none;
  background: rgba(255, 255, 255, 0.5);
`;

export default Paginate;
