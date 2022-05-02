/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";

export type Props = {
  children?: React.ReactNode;
};

export const LinkText: VFC<Props> = (props) => {
  const containerStyle = css`
    /* 文字 */
    font-size: 1em;

    /* 位置 */
    display: flex;
    justify-content: center;
    align-items: center;

    /* スマートフォン用 */
    @media (max-width: 780px) {
      display: none;
    }
  `;

  return <p css={containerStyle}>{props.children}</p>;
};
