import React from "react";
import { useNavigate } from "react-router";
import LogoView from "./LogoView";

const Logo = () => {
  const navigate = useNavigate();

  const viewProps = {
    goToHome: () => navigate("/"),
  };

  return <LogoView {...viewProps} />;
};

export default Logo;
