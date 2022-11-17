import { IMAGE_URL } from "api/service";
import { MovieDetailResponseType } from "api/type";

const randomFourImages = (list: MovieDetailResponseType[]) => {
  const randomState = [...list].sort(() => Math.random() - Math.random()).slice(0, 4);

  const images = [
    { id: 1, url: `${IMAGE_URL}${randomState[0].backdrop_path}` },
    { id: 2, url: `${IMAGE_URL}${randomState[1].backdrop_path}` },
    { id: 3, url: `${IMAGE_URL}${randomState[2].backdrop_path}` },
    { id: 4, url: `${IMAGE_URL}${randomState[3].backdrop_path}` },
  ];

  return images;
};

export default randomFourImages;
