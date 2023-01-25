/** @jsxImportSource @emotion/react */

import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "module/store";
import { getMovieList } from "module/action";
import { changeMovieType } from "module/reducers/movieTypeSlice";
import { MovieApiItemType } from "types/apiCategoryType";
import { useLocation } from "react-router";
import HeaderView from "./HeaderView";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [disableSearch, setDisableSearch] = useState(false);
  const { type } = useSelector((state: RootState) => state.movieType);
  const location = useLocation();
  const dispatch = useAppDispatch();

  const handleMenuToggle = () => {
    setIsActive(!isActive);
  };

  const handleCahngeMovieTypeUrl = useCallback(
    (type: MovieApiItemType, name: string) => {
      dispatch(changeMovieType({ type }));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getMovieList({ type, pageNumber: 1 }));
  }, [dispatch, type]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setDisableSearch(true);
    } else {
      setDisableSearch(false);
    }
  }, [location]);

  const viewProps = {
    isActive,
    type,
    disableSearch,
    onChangeMovieType: handleCahngeMovieTypeUrl,
    onMenuToggle: handleMenuToggle,
  };

  return <HeaderView {...viewProps} />;
};

export default Header;
