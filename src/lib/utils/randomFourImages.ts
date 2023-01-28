import { IMAGE_URL } from "api/service";
import { MovieListlResponseType } from "types/apiResponseType";

const initialValue: Array<{ id: number; url: string }> = [];

const randomFourImages = (list: MovieListlResponseType[]) => {
  const randomState = [...list].sort(() => Math.random() - Math.random()).slice(0, 4);

  const randomImages = randomState.reduce((images, cur, idx) => {
    return [...images, { id: idx, url: `${IMAGE_URL}${cur.backdrop_path}` }];
  }, initialValue);

  return randomImages;
};

export default randomFourImages;
