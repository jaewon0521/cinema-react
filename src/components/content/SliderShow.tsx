/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import SlideImage1 from "assets/Cinema_1.jpg";
import SlideImage2 from "assets/Cinema_2.jpg";

type Props = {};

const SliderShow = (props: Props) => {
  return (
    <div css={slider}>
      <Carousel showStatus={false} showThumbs={false} autoPlay={false} infiniteLoop={true} interval={4000}>
        <div>
          <img src={SlideImage1} alt="슬라이드이미지" />
        </div>
        <div>
          <img src={SlideImage2} alt="슬라이드이미지" />
        </div>
      </Carousel>
    </div>
  );
};

const slider = css`
  .carousel-container .carousel-slide {
    display: flex;
    justify-content: center;
    height: 500px;
  }

  .carousel.carousel-slider {
    height: 500px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default SliderShow;
