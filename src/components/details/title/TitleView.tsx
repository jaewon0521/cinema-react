import React from "react";

type Props = {
  title: string;
  releaseDate: string;
};

const TitleView = ({ title, releaseDate }: Props) => {
  return (
    <div className="title">
      {title} <span>{releaseDate} </span>
    </div>
  );
};

export default TitleView;
