/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from "react";
import logo from "assets/cinema-logo.svg";
import { css, keyframes } from "@emotion/react";
import media from "lib/styles/media";
import palette from "lib/palette";
import { headerType, HEADER_LIST } from "lib/constants";
import { RootState, useAppDispatch } from "module/store";
import { getMovieList } from "module/action";
import { changeMovieType } from "module/reducers/movieTypeSlice";
import { useSelector } from "react-redux";
import { MovieApiItemType } from "types/apiCategoryType";

interface headerListProps {
  header: headerType;
  activeType: MovieApiItemType;
  changeType: (type: MovieApiItemType, name: string) => void;
}

const ToggleMenuBar = () => {
  return (
    <>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </>
  );
};

const HeaderList = ({ header, changeType, activeType }: headerListProps) => {
  return (
    <>
      <li
        key={header.id}
        className={activeType === header.type ? "header-nav-item active-item" : "header-nav-item"}
        onClick={() => changeType(header.type, header.name)}
      >
        <span className="header-list-name">
          <i className={header.iconClass}></i>
        </span>{" "}
        <span className="header-list-name">{header.name}</span>
      </li>
    </>
  );
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { type } = useSelector((state: RootState) => state.movieType);
  const dispatch = useAppDispatch();

  const handleToggleMenuClick = () => {
    setIsActive(!isActive);
  };

  const handleCahngeMovieTypeUrl = (type: MovieApiItemType, name: string) => {
    dispatch(changeMovieType({ type }));
  };

  useEffect(() => {
    dispatch(getMovieList({ type, pageNumber: 1 }));
  }, [dispatch, type]);

  return (
    <div css={wrapper}>
      <div css={headerBar}></div>
      <div css={headerNavBar}>
        <div css={headerImage}>
          <img src={logo} alt="로고" />
        </div>
        <div css={headerMenuToggle(isActive)} onClick={handleToggleMenuClick}>
          <ToggleMenuBar />
        </div>
        <ul css={headerNav(isActive)}>
          {HEADER_LIST.map((header) => (
            <HeaderList key={header.id} activeType={type} header={header} changeType={handleCahngeMovieTypeUrl} />
          ))}
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

const headerImage = css`
  grid-area: link;
  width: 170px;
  /* height: 170px; */
  margin-left: 25px;
  margin-top: -5px;

  img {
    width: 170px;
    cursor: pointer;
  }
`;

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

const searchInput = css`
  ${media.small} {
    mask-repeat: 15px;
  }
  grid-area: search;
  margin-top: 10px;
  width: auto;
  border: 1px solid ${palette.grey[100]};
  padding: 5px;
  height: 36px;
  border-radius: 5px;
  outline: none;
  color: ${palette.grey[200]};
  line-height: 36px;

  &::placeholder {
    color: ${palette.grey[100]};
    font-size: 14px;
  }
`;

export default Header;
