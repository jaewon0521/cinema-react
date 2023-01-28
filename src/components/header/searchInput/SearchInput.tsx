import React, { useState, useCallback, useEffect } from "react";
import { useAppDispatch } from "module/store";
import { searchQueryChange } from "module/reducers/movieSlice";
import { getSearchMovieList } from "module/action";
import { useLocation } from "react-router";
import SearchInputView from "./SearchInputView";

const SearchInput = () => {
  const [searchText, setSearchText] = useState("");
  const [disableSearch, setDisableSearch] = useState(false);
  const dispatch = useAppDispatch();
  const location = useLocation();

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

  useEffect(() => {
    if (location.pathname !== "/") {
      setDisableSearch(true);
    } else {
      setDisableSearch(false);
    }
  }, [location]);

  const viewProps = {
    disable: disableSearch,
    searchText,
    onSearchChange: handleSearchChange,
    onKeyDownEnter: handleKeyDownEnter,
  };

  return <SearchInputView {...viewProps} />;
};

export default SearchInput;
