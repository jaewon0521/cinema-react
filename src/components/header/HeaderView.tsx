/** @jsxImportSource @emotion/react */

import React from "react";
import { css, keyframes } from "@emotion/react";
import palette from "lib/palette";
import media from "lib/styles/media";
import Logo from "./logo/Logo";
import MenuBar from "./menuBar/MenuBar";
import SearchInput from "./searchInput/SearchInput";
import NavMenuList from "./navMenuList/NavMenuList";

type Props = {
  isActive: boolean;
  onMenuToggle: () => void;
};

const HeaderView = ({ isActive, onMenuToggle }: Props) => {
  return (
    <div css={wrapper}>
      <div css={headerBar}></div>
      <div css={headerNavContainer}>
        <Logo />
        <ul css={headerNav(isActive)}>
          <NavMenuList />
          <SearchInput />
        </ul>
        <MenuBar isActive={isActive} onMenuToggle={onMenuToggle} />
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

const headerNavContainer = css`
  ${media.small} {
    li {
      list-style: none;
    }

    li:first-of-type {
      mask-type: 50px;
    }

    li .header-list-name {
      font-size: 1rem;
    }
  }

  display: grid;
  grid-template: "link . . menu search";
  grid-template-columns: max-content 1fr 1fr max-content max-content;
  height: 50px;
  line-height: 50px;
  color: #9aa9bb;
`;

const headerNav = (isActive: boolean) => css`
  ${media.small} {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 55px;
    background-color: #fff;
    width: 100%;
    height: calc(100vh - 55px);
    padding-right: 20px;
    padding-top: 50px;
    transform: translate(-101%);
    text-align: justify;
    overflow: hidden;
    z-index: 10;

    .header-nav-item {
      .header-list-icon {
        display: none;
      }
    }
  }

  grid-area: menu;
  margin-right: 25px;

  .header-nav-item {
    display: inline;
    list-style: none;
    padding-right: 15px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;

    .header-list-name {
      font-size: 0.9rem;
      font-weight: 400;
      text-decoration: none;
      transition: color 0.3s ease-out;
    }

    .header-list-icon {
      padding-right: 5px;
    }

    i:hover {
      color: ${palette.blue[100]};
    }

    .disabled {
      display: none;
    }
  }

  .active-item {
    color: ${palette.blue[100]};
    transform: scale(1 1);
  }
  ${isActive &&
  css`
    transform: translate(0%) !important;
  `}
`;

export default HeaderView;
