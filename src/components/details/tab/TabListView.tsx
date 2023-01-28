import React from "react";

type Props = {
  active: string;
  title: string;
};

const TabListView = ({ title, active }: Props) => {
  return (
    <li key={title} id={title} className={active === title ? "tab-list-item is-active" : "tab-list-item"}>
      {title}
    </li>
  );
};

export default TabListView;
