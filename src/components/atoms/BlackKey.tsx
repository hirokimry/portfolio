/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";

export type Props = {
  children?: React.ReactNode;
};

export const BlackKey: VFC<Props> = (props) => {
  // test css
  const containerStyle = css`
    //draft
    background-color: #333333;
    width: 35px;
    height: 70px;
    border-radius: 15%;

    position: absolute;
    top: 0%;
    left: 75%;
    z-index: 1;
  `;

  return <div css={containerStyle}></div>;
};
