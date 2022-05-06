/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";
import { Text } from "../atoms/Text";
import PortfolioImage1 from "../../img/Portfolio1.png";
import PortfolioImage2 from "../../img/Portfolio2.png";
import PortfolioImage3 from "../../img/Portfolio3.png";
import LinkIcon from "@mui/icons-material/Link";

export const WorkDetail: VFC = () => {
  const containerStyle = css`
    /* サイズ */
    width: 90%;
    height: 90%;

    /* 配置 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  `;

  const productTitleStyle = css`
    /* 文字 */
    font-size: 32px;
    /* スマートフォン用 */
    @media (max-width: 780px) {
      font-size: 16px;
    }
  `;

  const detailsStyle = css`
    /* サイズ */
    width: 100%;
    height: 90%;

    /* 配置 */
    display: flex;
    justify-content: space-around;
    align-items: center;

    /* スマートフォン用 */
    @media (max-width: 780px) {
      flex-direction: column;
    }
  `;

  const imagesStyle = css`
    /* サイズ */
    width: 40%;
    height: 90%;
    /* 配置 */
    position: relative;

    /* スマートフォン用 */
    @media (max-width: 780px) {
      width: 100%;
      height: 30%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  `;

  const largeImageStyle = css`
    /* サイズ */
    width: 320px;
    height: 320px;
    border-radius: 50%;
    border: solid 1px rgba(0, 111, 111, 0.95);

    /* 配置 */
    display: flex;
    justify-content: center;
    position: absolute;
    top: calc(50% - 48px);
    left: calc(50% - 32px);
    transform: translate(-50%, -50%);
    overflow: hidden;
    z-index: 2;

    /* 小画面用 */
    @media (max-height: 780px), (max-width: 1400px) {
      width: 240px;
      height: 240px;
      top: calc(50% - 64px);
      left: calc(50% - 40px);
    }
    /* スマートフォン用 */
    @media (max-width: 780px) {
      width: 80px;
      height: 80px;

      position: relative;
      top: 0;
      left: 0;
      transform: none;
    }
  `;
  const middleImageStyle = css`
    /* サイズ */
    width: 240px;
    height: 240px;
    border-radius: 50%;
    border: solid 1px rgba(0, 111, 111, 0.95);

    /* 配置 */
    display: flex;
    justify-content: center;
    position: absolute;
    overflow: hidden;
    top: calc(50% + 80px);
    left: calc(50% + 152px);
    transform: translate(-50%, -50%);
    z-index: 1;

    /* 小画面用 */
    @media (max-height: 780px), (max-width: 1400px) {
      width: 160px;
      height: 160px;
      top: calc(50% + 48px);
      left: calc(50% + 80px);
    }
    /* スマートフォン用 */
    @media (max-width: 780px) {
      width: 80px;
      height: 80px;

      position: relative;
      top: 0;
      left: 0;
      transform: none;
    }
  `;
  const smallImageStyle = css`
    /* サイズ */
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: solid 1px rgba(0, 111, 111, 0.95);

    /* 配置 */
    display: flex;
    justify-content: center;
    position: absolute;
    top: calc(50% + 80px);
    left: calc(50% - 152px);
    transform: translate(-50%, -50%);
    overflow: hidden;
    z-index: 3;

    /* 小画面用 */
    @media (max-height: 780px), (max-width: 1400px) {
      width: 80px;
      height: 80px;
      top: calc(50% + 48px);
      left: calc(50% - 128px);
    }
    /* スマートフォン用 */
    @media (max-width: 780px) {
      width: 80px;
      height: 80px;

      position: relative;
      top: 0;
      left: 0;
      transform: none;
    }
  `;
  const commonImageStyle = css`
    /* サイズ */
    width: auto;
    height: 100%;
  `;

  const descriptionsStyle = css`
    /* サイズ */
    width: 40%;
    height: 90%;

    /* 配置 */
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    /* スマートフォン用 */
    @media (max-width: 780px) {
      width: 100%;
      height: 70%;
    }
  `;

  const skillSetStyle = css`
    /* 色 */
    color: darkcyan;
    filter: brightness(50%);

    /* 文字 */
    font-size: 1em;
    font-style: italic;
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
  const linkStyle = css`
    /* 色 */
    color: darkcyan;

    /* 配置 */
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
      filter: brightness(50%);
    }
  `;
  const linkTextStyle = css`
    /* 文字 */
    font-size: 1em;
    text-decoration-line: underline;
    text-decoration-thickness: 1px;

    /* スマートフォン用 */
    @media (max-width: 780px) {
    }
  `;

  return (
    <div css={containerStyle}>
      <h1 css={productTitleStyle}>Portfolio</h1>
      <div css={detailsStyle}>
        <div css={imagesStyle}>
          <div css={largeImageStyle}>
            <img
              src={PortfolioImage1}
              alt="largeImage"
              css={commonImageStyle}
            />
          </div>
          <div css={middleImageStyle}>
            <img
              src={PortfolioImage2}
              alt="middleImage"
              css={commonImageStyle}
            />
          </div>
          <div css={smallImageStyle}>
            <img
              src={PortfolioImage3}
              alt="smallImage"
              css={commonImageStyle}
            />
          </div>
        </div>
        <div css={descriptionsStyle}>
          <Text>
            当サイトです。
            {"\n"}
            モダンJavaScriptの学習も兼ねて、React + TypeScriptで制作しました。
            設計の段階ではメンテナンス性を重視するためにAtomic
            Designを採用しています。
            {"\n"}
            問い合わせフォームは、EmailJSを利用してメールの自動返信にも対応させています。
          </Text>
          <p css={skillSetStyle}>
            HTML / CSS / JavaScript / React / TypeScript
          </p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://hirokimoriya.com/"
            css={linkStyle}
          >
            <p css={linkTextStyle}>https://hirokimoriya.com/</p>
            <LinkIcon />
          </a>
        </div>
      </div>
    </div>
  );
};
