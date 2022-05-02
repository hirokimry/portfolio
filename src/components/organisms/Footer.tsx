/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";
import { Copyrigth } from "../atoms/Copyrigth";
import { Menu } from "../molecules/Menu";

export const Footer: VFC = () => {
  const containerStyle = css`
    background-color: #f0f0f0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `;

  return (
    <footer css={containerStyle}>
      <Menu inversionFlg={true}></Menu>
      <Copyrigth></Copyrigth>
    </footer>
  );
};
