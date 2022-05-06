/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";

export type Props = {
  children?: React.ReactNode;
};

export const SectionName: VFC<Props> = (props) => {
  const containerStyle = css`
    /* 文字 */
    font-size: 48px;
    font-weight: normal;
    text-decoration-line: underline;
    text-decoration-thickness: 2px;

    /* 配置 */
    display: flex;
    justify-content: center;
    align-items: center;

    /* スマートフォン用 */
    @media (max-width: 780px) {
      font-size: 32px;
    }
  `;

  return <h1 css={containerStyle}>{props.children}</h1>;
};
