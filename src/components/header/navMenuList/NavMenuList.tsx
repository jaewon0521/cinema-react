import React, { useCallback, useEffect } from "react";
import { HEADER_LIST } from "lib/constants";
import { RootState, useAppDispatch } from "module/store";
import { useSelector } from "react-redux";
import { MovieApiItemType } from "types/apiCategoryType";
import { changeMovieType } from "module/reducers/movieTypeSlice";
import { getMovieList } from "module/action";
import NavMenuListView from "./NavMenuListView";

const NavMenuList = () => {
  const { type } = useSelector((state: RootState) => state.movieType);
  const dispatch = useAppDispatch();

  const handleCahngeMovieTypeUrl = useCallback(
    (type: MovieApiItemType, name: string) => {
      dispatch(changeMovieType({ type }));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getMovieList({ type, pageNumber: 1 }));
  }, [dispatch, type]);
  return (
    <>
      {HEADER_LIST.map((header) => (
        <NavMenuListView key={header.id} activeType={type} header={header} changeType={handleCahngeMovieTypeUrl} />
      ))}
    </>
  );
};

export default NavMenuList;
