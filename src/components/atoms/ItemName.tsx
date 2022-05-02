/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";

export type Props = {
  children?: React.ReactNode;
};

export const ItemName: VFC<Props> = (props) => {
  const textStyle = css`
    /* サイズ */
    width: 100px;

    /* 文字 */
    font-size: 1em;
    font-weight: bold;

    /* 配置 */
    display: flex;
    align-items: center;
    margin: 0;

    /* スマートフォン用 */
    @media (max-width: 780px) {
      font-size: 0.8em;
    }
  `;

  return <p css={textStyle}>{props.children}</p>;
};
