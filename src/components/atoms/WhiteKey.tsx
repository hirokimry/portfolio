/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";

export type Props = {
  children?: string;
};

export const WhiteKey: VFC<Props> = (props) => {
  const { children } = props;

  const keyColor: string = children !== undefined ? "lightgray" : "white";
  const cursor: string = children !== undefined ? "pointer" : "auto";

  const action =
    children !== undefined
      ? () => {
          const sectionId = document.getElementById(children);
          if (sectionId != null) {
            sectionId.scrollIntoView({ behavior: "smooth" });
          }
        }
      : () => {};

  const containerStyle = css`
    /* 色 */
    background-color: ${keyColor};

    /* サイズ */
    width: 70px;
    height: 120px;

    /* 線 */
    border: solid darkgray;
    border-width: 0px 0px 0px 1px;
    border-radius: 5%;

    /* 配置 */
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: ${cursor};
    }

    /* スマートフォン用 */
    @media (max-width: 780px) {
      /* 色 */
      background-color: transparent;

      /* サイズ */
      width: calc(100vw / 3);
      height: auto;

      /* 線 */
      border: none;
    }
  `;

  const sectionNamesStyle = css`
    /* 色 */
    color: dimgray;
    /* 文字 */
    font-size: 1em;
    /* 配置 */
    transform: rotateZ(90deg);

    /* スマートフォン用 */
    @media (max-width: 780px) {
      transform: none;
    }
  `;

  return (
    <div css={containerStyle} onClick={action}>
      <p css={sectionNamesStyle}>{children}</p>
    </div>
  );
};
