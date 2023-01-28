import React, { useState } from "react";
import TabView from "./TabView";

export type TabListType = {
  title: string;
  component: React.ReactNode;
};

type Props = {
  tabList: TabListType[];
};

const Tab = ({ tabList }: Props) => {
  const [active, setActive] = useState(tabList[0].title);
  const content = tabList.find((tab) => active === tab.title)!;

  const handleChangeTabActive = (e: React.MouseEvent<HTMLOListElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "OL") return;
    setActive(target.id);
  };

  const viewProps = {
    tabList,
    active,
    content,
    onChangeTab: handleChangeTabActive,
  };

  return <TabView {...viewProps} />;
};

export default Tab;
