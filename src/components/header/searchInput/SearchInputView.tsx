/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import media from "lib/styles/media";
import palette from "lib/palette";

type Props = {
  disable: boolean;
  searchText: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDownEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const SearchInputView = ({ disable, searchText, onSearchChange, onKeyDownEnter }: Props) => {
  return (
    <input
      type="text"
      css={searchInput}
      value={searchText}
      onChange={onSearchChange}
      onKeyDown={onKeyDownEnter}
      placeholder="Press Enter to search"
      disabled={disable}
    />
  );
};

const searchInput = css`
  ${media.small} {
    mask-repeat: 15px;
  }
  grid-area: search;
  margin-top: 10px;
  width: auto;
  border: 1px solid ${palette.grey[100]};
  padding: 5px;
  height: 36px;
  border-radius: 5px;
  outline: none;
  color: ${palette.grey[200]};
  line-height: 36px;

  &::placeholder {
    color: ${palette.grey[100]};
    font-size: 14px;
  }
`;

export default SearchInputView;
