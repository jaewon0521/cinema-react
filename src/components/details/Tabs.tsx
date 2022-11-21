/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import palette from "lib/palette";
import React, { useState } from "react";

type Props = {};

const Tabs = (props: Props) => {
  const [active, setActive] = useState("overview");

  const handleChangeTabActive = (e: React.MouseEvent<HTMLOListElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "OL") return;
    setActive(target.id);
  };

  return (
    <div css={tabs}>
      <ol className="tab-list" onClick={handleChangeTabActive}>
        <li id="overview" className={active === "overview" ? "tab-list-item is-active" : "tab-list-item"}>
          overview
        </li>
        <li id="crew" className={active === "crew" ? "tab-list-item is-active" : "tab-list-item"}>
          crew
        </li>
        <li id="media" className={active === "media" ? "tab-list-item is-active" : "tab-list-item"}>
          media
        </li>
        <li id="reviews" className={active === "reviews" ? "tab-list-item is-active" : "tab-list-item"}>
          reviews
        </li>
      </ol>
      <div className="tab-content">content</div>
    </div>
  );
};

const tabs = css`
  text-align: left;

  .tab-list {
    padding-left: 0;
  }

  .tab-list-item {
    display: inline-block;
    list-style: none;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    color: ${palette.grey[400]};
    padding-bottom: 15px;
    margin-right: 50px;
  }

  .is-active {
    color: #dcf836;
    border-bottom: 3px solid #dcf836;
  }
`;

export default Tabs;
