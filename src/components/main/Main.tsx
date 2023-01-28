import React from "react";
import MainContent from "components/main/mainContent/MainContent";
import { useSelector } from "react-redux";
import { RootState } from "module/store";
import Spinner from "components/common/Spinner";
import SearchResultContent from "components/main/searchResultContent/SearchResultContent";
import MainView from "./MainView";

const Main = () => {
  const { movies, error, searchResult } = useSelector((state: RootState) => state.movies);
  let Component;

  if (movies.list.length === 0) {
    Component = Spinner;
  }

  if (searchResult.length === 0) {
    Component = MainContent;
  } else {
    Component = SearchResultContent;
  }

  if (error) {
    return <>{error}</>;
  }

  const viewProps = {
    Component,
  };

  return <MainView {...viewProps} />;
};

export default Main;
