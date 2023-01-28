/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import media from "lib/styles/media";
import palette from "lib/palette";
import { tabListType } from "./Tab";
import TabListView from "./TabListView";

type Props = {
  tabElements: tabListType[];
  active: string;
  currentContent: tabListType;
  onChangeTab: (e: React.MouseEvent<HTMLOListElement>) => void;
};

const TabView = ({ tabElements, active, currentContent, onChangeTab }: Props) => {
  return (
    <div css={tabs}>
      <ol className="tab-list" onClick={onChangeTab}>
        {tabElements.map((tab, index) => (
          <TabListView key={`${tab.title}_${index}`} title={tab.title} active={active} />
        ))}
      </ol>
      <div className="tab-content">{currentContent.component}</div>
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
    cursor: pointer;
  }

  .is-active {
    color: ${palette.yellow[200]};
    border-bottom: 3px solid ${palette.yellow[200]};
  }

  ${media.small} {
    .tab-list {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }

    .tab-list-item {
      display: block;
      text-align: left;
    }

    .is-active {
      border-bottom: none;
    }
  }
`;

export default TabView;