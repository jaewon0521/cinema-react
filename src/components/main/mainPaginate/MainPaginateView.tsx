/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import Paginate from "components/common/Paginate";

type Props = {
  page: number;
  totalPages: number;
  onPaginate: (btnType: string) => void;
};

const MainPaginateView = ({ page, totalPages, onPaginate }: Props) => {
  return (
    <div css={paginate}>
      <Paginate currentPage={page} totalPages={totalPages} onPaginate={onPaginate} />
    </div>
  );
};

const paginate = css`
  grid-area: paginate;
  text-align: right;
  padding-right: 25px;
`;

export default MainPaginateView;
