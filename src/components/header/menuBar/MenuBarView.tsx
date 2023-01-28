/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import palette from "lib/palette";
import media from "lib/styles/media";

type Props = {
  isActive: boolean;
  onMenuToggle: () => void;
};

const MenuBarView = ({ isActive, onMenuToggle }: Props) => {
  return (
    <div css={headerMenuToggle(isActive)} onClick={onMenuToggle}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
};

const headerMenuToggle = (isActive: boolean) => css`
  ${media.small} {
    &,
    .bar {
      display: block;
      cursor: pointer;
      margin-top: 13px;
    }
  }
  grid-area: menu;
  justify-self: end;
  margin-right: 25px;
  display: none;

  &:hover {
    cursor: pointer;
  }

  .bar {
    width: 25px;
    height: 3px;
    background-color: ${palette.black[100]};
    margin: 5px auto;
    transition: all 0.3s ease-in-out;
  }

  ${isActive &&
  css`
    .bar:nth-of-type(1) {
      transform: translateY(8px) rotate(45deg);
    }
    .bar:nth-of-type(2) {
      opacity: 0;
    }
    .bar:nth-of-type(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  `}
`;

export default MenuBarView;
