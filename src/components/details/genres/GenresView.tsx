import React from "react";
import GenresListView from "./GenresListView";

type Props = {
  genres: { id: number; name: string }[];
};

const GenresView = ({ genres }: Props) => {
  return (
    <div className="movie-genres">
      <GenresListView genres={genres} />
    </div>
  );
};

export default GenresView;
