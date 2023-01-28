import React, { useEffect } from "react";
import { clearDetailsMovie } from "module/reducers/movieDetailsSlice";
import Spinner from "components/common/Spinner";
import { useParams } from "react-router";
import { RootState, useAppDispatch } from "module/store";
import { getMovieDetails } from "module/action";
import { useSelector } from "react-redux";
import DetailsView from "components/details/DetailsView";

const Details = () => {
  const { id } = useParams();
  const { details } = useSelector((state: RootState) => state.movieDetails);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovieDetails({ id: Number(id) }));

    return () => {
      dispatch(clearDetailsMovie());
    };
  }, [dispatch, id]);

  if (!details.movieInfo) {
    return <Spinner />;
  }

  const viewProps = {
    details,
  };

  return <DetailsView {...viewProps} />;
};

export default Details;
