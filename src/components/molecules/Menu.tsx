/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";
import { WhiteKey } from "../atoms/WhiteKey";
import { BlackKey } from "../atoms/BlackKey";

export type MenuProps = {
  inversionFlg?: boolean;
};

export const Menu: VFC<MenuProps> = (props) => {
  const filter: string =
    props.inversionFlg !== true
      ? "none"
      : "invert() brightness(200%) contrast(50%)";

  const containerStyle = css`
    /* 配置 */
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const mianMenuStyle = css`
    /* 色 */
    filter: ${filter};

    /* 配置 */
    display: flex;
    justify-content: center;
    align-items: center;

    /* スマートフォン用 */
    @media (max-width: 780px) {
      display: none;
    }
  `;

  const optionalMenuStyle = css`
    /* 色 */
    filter: ${filter};

    /* 配置 */
    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(270deg, transparent, white);

    /* 小画面用 */
    @media (max-width: 1400px) {
      display: none;
    }
  `;

  const compactMenuStyle = css`
    /* 配置 */
    display: none;

    /* スマートフォン用 */
    @media (max-width: 780px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  return (
    <div css={containerStyle}>
      <div css={optionalMenuStyle}>
        <Keys></Keys>
        <Keys></Keys>
        <WhiteKey></WhiteKey>
        <Keys></Keys>
        <Keys></Keys>
        <Keys></Keys>
        <WhiteKey></WhiteKey>
      </div>
      <div css={mianMenuStyle}>
        <Keys></Keys>
        <Keys></Keys>
        <WhiteKey>About</WhiteKey>
        <Keys></Keys>
        <Keys>Works</Keys>
        <Keys></Keys>
        <WhiteKey>Contact</WhiteKey>
        <WhiteKey></WhiteKey>
      </div>
      <div css={compactMenuStyle}>
        <WhiteKey>About</WhiteKey>
        <WhiteKey>Works</WhiteKey>
        <WhiteKey>Contact</WhiteKey>
      </div>
    </div>
  );
};

export type KeysProps = {
  children?: string;
};

export const Keys: VFC<KeysProps> = (props) => {
  const keySetStyle = css`
    position: relative;
  `;

  return (
    <div css={keySetStyle}>
      <WhiteKey>{props.children}</WhiteKey>
      <BlackKey></BlackKey>
    </div>
  );
};
