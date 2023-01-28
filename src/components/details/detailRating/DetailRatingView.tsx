import Rating from "components/common/Rating";
import React from "react";

type Props = {
  average: number;
  voteCount: number;
};

const DetailRatingView = ({ average, voteCount }: Props) => {
  return (
    <div className="rating">
      <Rating rating={average} totalStars={10} /> &nbsp; <span>{average}</span> <p>({voteCount}) 리뷰</p>
    </div>
  );
};

export default DetailRatingView;
