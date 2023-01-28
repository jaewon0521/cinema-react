import React, { useState } from "react";
import TabView from "./TabView";

export type tabListType = {
  title: string;
  component: React.ReactNode;
};

console.log(1);

type Props = {
  tabElements: tabListType[];
};

const Tab = ({ tabElements }: Props) => {
  const [active, setActive] = useState(tabElements[0].title);
  const content = tabElements.find((tab) => active === tab.title)!;

  const handleChangeTabActive = (e: React.MouseEvent<HTMLOListElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "OL") return;
    setActive(target.id);
  };

  const viewProps = {
    tabElements,
    active,
    currentContent: content,
    onChangeTab: handleChangeTabActive,
  };

  return <TabView {...viewProps} />;
};

export default Tab;
