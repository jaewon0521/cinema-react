/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { TAB_LIST } from "lib/constants";
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
        {TAB_LIST.map((tab) => (
          <li id={tab} className={active === tab ? "tab-list-item is-active" : "tab-list-item"}>
            {tab}
          </li>
        ))}
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
