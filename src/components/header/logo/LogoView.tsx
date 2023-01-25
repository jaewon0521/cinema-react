/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import logo from "assets/cinema-logo.svg";

type Props = {
  goToHome: () => void;
};

const LogoView = ({ goToHome }: Props) => {
  return (
    <div css={headerImage} onClick={goToHome}>
      <img src={logo} alt="로고" />
    </div>
  );
};

export default LogoView;

const headerImage = css`
  grid-area: link;
  width: 170px;
  margin-left: 25px;
  margin-top: -5px;

  img {
    width: 170px;
    cursor: pointer;
  }
`;
