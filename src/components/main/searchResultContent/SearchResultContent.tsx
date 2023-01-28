import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "module/store";
import randomFourImages from "lib/utils/randomFourImages";
import SearchResultContentView from "./SearchResultContentView";

const SearchResultContent = () => {
  const { searchResult, searchQuery } = useSelector((state: RootState) => state.movies);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const randomImageList = useMemo(() => randomFourImages(searchResult), []);

  const viewProps = {
    randomImageList,
    keyWord: searchQuery,
    list: searchResult,
  };

  return <SearchResultContentView {...viewProps} />;
};

export default SearchResultContent;
