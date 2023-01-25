/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import palette from "lib/palette";

type Props = {
  Component: React.ComponentType;
};

const MainView = ({ Component }: Props) => {
  return (
    <div css={wrapper}>
      <Component />
    </div>
  );
};

const wrapper = css`
  text-align: center;
  background-color: ${palette.black[200]};
`;

export default MainView;
