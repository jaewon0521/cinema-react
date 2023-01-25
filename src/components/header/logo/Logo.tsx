import React from "react";
import { clearSearchResult } from "module/reducers/movieSlice";
import { useAppDispatch } from "module/store";
import { useNavigate } from "react-router";
import LogoView from "./LogoView";

const Logo = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const viewProps = {
    goToHome: () => {
      dispatch(clearSearchResult());
      navigate("/");
    },
  };

  return <LogoView {...viewProps} />;
};

export default Logo;
