import React, { useEffect } from "react";
import DetailsContent from "components/details/DetailsView";
import { clearDetailsMovie } from "module/reducers/movieDetailsSlice";
import Spinner from "components/common/Spinner";
import { useParams } from "react-router";
import { RootState, useAppDispatch } from "module/store";
import { getMovieDetails } from "module/action";
import { useSelector } from "react-redux";

const Details = () => {
  const { id } = useParams();
  const { details } = useSelector((state: RootState) => state.movieDetails);
  const dispatch = useAppDispatch();
  console.log(1);

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

  return <DetailsContent {...viewProps} />;
};

export default Details;
