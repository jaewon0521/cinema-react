/** @jsxImportSource @emotion/react */

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { css } from "@emotion/react";

type imageListType = {
  id: number;
  url: string;
};

type Props = {
  imageList: imageListType[];
};

const Slide = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div>
      <img src={imageUrl} alt="슬라이드 이미지" />
    </div>
  );
};

const SliderShow = ({ imageList }: Props) => {
  return (
    <div css={slider}>
      <Carousel showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} interval={4000}>
        <Slide imageUrl={imageList[0].url} />
        <Slide imageUrl={imageList[1].url} />
        <Slide imageUrl={imageList[2].url} />
        <Slide imageUrl={imageList[3].url} />
      </Carousel>
    </div>
  );
};

const slider = css`
  .carousel-container .carousel-slide {
    display: flex;
    justify-content: center;
    height: 700px;
  }

  .carousel.carousel-slider {
    height: 700px;
    img {
      display: block;
      width: 100%;
      height: 700px;
      object-fit: cover;
    }
  }
`;

export default SliderShow;
