/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import HeaderView from "./HeaderView";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuToggle = () => {
    setIsActive(!isActive);
  };

  const viewProps = {
    isActive,
    onMenuToggle: handleMenuToggle,
  };

  return <HeaderView {...viewProps} />;
};

export default Header;
