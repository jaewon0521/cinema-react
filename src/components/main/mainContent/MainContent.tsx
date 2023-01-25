import React, { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import randomFourImages from "lib/utils/randomFourImages";
import { HEADER_LIST } from "lib/constants";
import { getMoreMovieList } from "module/action";
import { RootState, useAppDispatch } from "module/store";
import useInfinityScroll from "hook/useInfinityScroll";
import MainContentView from "./MainContentView";

const MainContent = () => {
  const { list, page, totalPages } = useSelector((state: RootState) => state.movies.movies);
  const { type } = useSelector((state: RootState) => state.movieType);
  const dispatch = useAppDispatch();
  const currentMovieType = HEADER_LIST.find((header) => header.type === type)?.name!;
  const randomImageList = useMemo(() => randomFourImages(list), [list]);

  const fetchData = useCallback(() => {
    if (page < totalPages) {
      let pageNumber = page + 1;
      dispatch(getMoreMovieList({ type, pageNumber }));
    }
  }, [page, totalPages, type, dispatch]);

  const $observerTarget = useInfinityScroll(fetchData);

  const viewProps = {
    randomImageList,
    currentMovieType,
    list,
    $observerTarget,
  };

  return <MainContentView {...viewProps} />;
};

export default MainContent;
