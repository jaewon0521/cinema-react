/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import palette from "lib/palette";

type Props = {
  currentPage: number;
  totalPages: number;
  onPaginate: (type: string) => void;
};

const Paginate = ({ currentPage, totalPages, onPaginate }: Props) => {
  const [page, setPage] = useState<number>(0);
  const [totalPageNumber, setTotalPageNumber] = useState<number>(0);

  useEffect(() => {
    setPage(currentPage);
    setTotalPageNumber(totalPages);
  }, [currentPage, totalPages]);

  return (
    <>
      <span css={pageCount}>
        {page} - {totalPageNumber}
      </span>
      <button css={page > 1 ? paginateButton : [paginateButton, disable]} onClick={() => onPaginate("prev")}>
        Prev
      </button>
      <button
        css={page === totalPageNumber ? [paginateButton, disable] : paginateButton}
        onClick={() => onPaginate("next")}
      >
        Next
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
