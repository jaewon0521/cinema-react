/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import logo from "assets/cinema-logo.svg";
import { css, keyframes } from "@emotion/react";

type Props = {};

const Header = (props: Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleMenuClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div css={wrapper}>
      <div css={headerBar}></div>
      <div css={headerNavBar}>
        <div css={headerImage}>
          <img src={logo} alt="로고" />
        </div>
        <div css={headerMenuToggle(isActive)} onClick={handleToggleMenuClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul css={headerNav}>
          <li className="header-nav-item">Now Playing</li>
          <li className="header-nav-item">New Movies</li>
          <input type="text" css={searchInput} placeholder="Search for a movie" />
        </ul>
      </div>
    </div>
  );
};

const headerbarAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100%{
    background-position: 0% 50%;
  }
`;

const wrapper = css`
  width: 100%;
  top: 0;
  background-color: #fff;
  position: sticky;
  z-index: 9999;
`;

const headerBar = css`
  width: 100%;
  height: 5px;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400%;
  animation: ${headerbarAnimation} 15s ease infinite;
`;

const headerNavBar = css`
  display: grid;
  grid-template: "link . . menu search";
  grid-template-columns: max-content 1fr 1fr max-content max-content;
  height: 50px;
  line-height: 50px;
  color: #9aa9bb;
`;

const headerImage = css`
  grid-area: link;
  width: 170px;
  height: 170px;
  margin-left: 25px;
  margin-top: -5px;

  img {
    width: 170px;
  }
`;

const headerMenuToggle = (isActive: boolean) => css`
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
    background-color: #3f3f3f;
    margin: 5px auto;
    transition: all 0.3s ease-in-out;
  }

  ${isActive &&
  css`
    .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    .bar:nth-child(2) {
      opacity: 0;
    }
    .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  `}
`;

const headerNav = css`
  grid-area: menu;
  margin-right: 25px;

  .header-nav-item {
    display: inline;
    list-style: none;
    padding-right: 15px;
    font-size: 14px;
    font-weight: bold;

    .header-list-icon {
      padding-right: 5px;
    }

    a:hover {
      color: #3498db;
    }
  }
`;

const searchInput = css`
  grid-area: search;
  margin-top: 10px;
  width: auto;
  border: 1px solid #9aa9bb;
  padding: 5px;
  height: 36px;
  border-radius: 5px;
  outline: none;
  color: #9dbfaf;
  line-height: 36px;

  &::placeholder {
    color: #9aa9bb;
    font-size: 14px;
  }
`;

export default Header;
