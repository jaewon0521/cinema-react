import React from "react";
import MenuBarView from "./MenuBarView";

type Props = {
  isActive: boolean;
  onMenuToggle: () => void;
};

const MenuBar = (viewProps: Props) => {
  return <MenuBarView {...viewProps} />;
};

export default MenuBar;
