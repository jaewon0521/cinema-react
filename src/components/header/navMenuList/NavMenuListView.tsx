/** @jsxImportSource @emotion/react */

import React from "react";
import { headerType } from "lib/constants";
import { MovieApiItemType } from "types/apiCategoryType";

type Props = {
  header: headerType;
  activeType: MovieApiItemType;
  changeType: (type: MovieApiItemType, name: string) => void;
};

const NavMenuListView = ({ header, changeType, activeType }: Props) => {
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

export default NavMenuListView;
