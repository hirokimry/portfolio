/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";

export const Copyrigth: VFC = () => {
  // test css
  const containerStyle = css`
    //draft
    /* background-color: skyblue; */
    width: 200px;
    height: 40px;

    //Confirm
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;

    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return <div css={containerStyle}>©2022 Hiroki Moriya</div>;
};
