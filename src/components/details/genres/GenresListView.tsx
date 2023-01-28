import React from "react";

type Props = {
  genres: { id: number; name: string }[];
};

const GenresListView = ({ genres }: Props) => {
  return (
    <ul className="genres">
      {genres.map((gener) => (
        <li key={gener.id}>{gener.name}</li>
      ))}
    </ul>
  );
};

export default GenresListView;
