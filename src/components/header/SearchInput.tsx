/** @jsxImportSource @emotion/react */

import React, { useState, useCallback } from "react";
import { css } from "@emotion/react";
import media from "lib/styles/media";
import palette from "lib/palette";
import { useAppDispatch } from "module/store";
import { searchQueryChange } from "module/reducers/movieSlice";
import { getSearchMovieList } from "module/action";

type Props = {
  disable: boolean;
};

const SearchResult = ({ disable }: Props) => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useAppDispatch();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleKeyDownEnter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        dispatch(searchQueryChange(searchText));
        dispatch(getSearchMovieList({ query: searchText }));
      }
    },
    [dispatch, searchText]
  );

  return (
    <input
      type="text"
      css={searchInput}
      value={searchText}
      onChange={handleSearchChange}
      onKeyDown={handleKeyDownEnter}
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
export default React.memo(SearchResult);
