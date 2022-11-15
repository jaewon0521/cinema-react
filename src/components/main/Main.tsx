/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import MainContent from "components/content/MainContent";
import palette from "lib/palette";
import React from "react";

type Props = {};

const Main = (props: Props) => {
  return (
    <div css={wrapper}>
      <MainContent />
    </div>
  );
};

const wrapper = css`
  text-align: center;
  height: 100vh;
  background-color: ${palette.black[200]};
  /* overflow-y: auto; */
`;

export default Main;
