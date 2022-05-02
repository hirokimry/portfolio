/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";

export type Props = {
  children?: React.ReactNode;
};

export const ProductTitle: VFC<Props> = (props) => {
  const textSize: number = 24;

  const textStyle = css`
    /* 色 */
    color: white;

    /* サイズ */
    width: 100%;

    /* 文字 */
    font-size: ${textSize}px;

    /* 配置 */
    display: flex;
    justify-content: center;
    position: absolute; // Imageの中央に重ねる
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - ${textSize}px));
    z-index: 0;

    /* スマートフォン用 */
    @media (max-width: 780px) {
      z-index: 2;
    }
  `;

  return <p css={textStyle}>{props.children}</p>;
};
