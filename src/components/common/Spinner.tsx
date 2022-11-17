/** @jsxImportSource @emotion/react */

import React from "react";
import { css, keyframes } from "@emotion/react";

const Spinner = () => {
  return (
    <div css={spinner}>
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
  );
};

const bounceAnimation = keyframes`
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

const spinner = css`
  margin: 100px auto 0;
  width: 100px;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  div {
    width: 18px;
    height: 18px;
    background-color: #ffffff;
    border-radius: 100%;
    display: inline-block;
    animation: ${bounceAnimation} 1.4s infinite ease-in-out both;
  }

  .bounce1 {
    animation-delay: -0.32s;
  }
  .bounce2 {
    animation-delay: -0.16s;
  }
`;

export default Spinner;
