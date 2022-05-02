/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";
import { Top } from "./Top";
import { About } from "./About";
import { Works } from "./Works";
import { Contact } from "./Contact";

export const Main: VFC = () => {
  const containerStyle = css`
    /* 配置 */
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: hidden;
  `;

  return (
    <div id="main" css={containerStyle}>
      <Top />
      <About />
      <Works />
      <Contact />
    </div>
  );
};
