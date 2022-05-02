/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";
import { useContext } from "react";
import { headerHeightContext } from "../../context/headerHeight";
import ArrowButton from "@mui/icons-material/KeyboardArrowDown";
import TopImg from "../../img/TopImg.jpg";

export const Top: VFC = () => {
  const headerHeight = useContext(headerHeightContext);

  const containerStyle = css`
    /* 色 */
    background-color: darkcyan;
    filter: grayscale(80%);

    /* サイズ */
    width: 100%;
    height: calc(100vh - ${headerHeight.headerHeight}px);

    /* 配置 */
    display: flex;
    justify-content: center;
    align-items: center;

    /* 表示崩れ防止 */
    @media (max-height: 780px) and (min-width: 780px) {
      height: auto;
    }
  `;

  const imageStyle = css`
    /* サイズ */
    height: 100%;

    /* 表示崩れ防止 */
    @media (max-height: 780px) and (min-width: 780px) {
      width: 50%;
    }

    /* スマートフォン用 */
    @media (max-width: 780px) {
      /* 回転によりwidth, heightが逆転するため調整 */
      transform: rotateZ(270deg);
      width: calc(100vh - ${headerHeight.headerHeight}px);
      height: auto;
    }
  `;

  const textStyle = css`
    /* 色 */
    color: white;
    background-color: gray;

    /* サイズ */
    width: 100%;

    /* 文字 */
    font-size: calc((1vw + 1vh) * 3);

    /* 配置 */
    position: absolute;
    z-index: 1;
    top: 60%;
    transform: translate(0%, -60%);
    padding: 0vw 9vw;
    box-sizing: border-box;
  `;

  const arrowButtonStyle = css`
    /* 色 */
    color: white;
    background-color: darkcyan;

    /* サイズ */
    width: 80px;
    height: 80px;
    border: solid 3px lightcyan;
    border-radius: 50%;

    /* 配置 */
    position: absolute;
    z-index: 1;
    top: 95%;

    /* アニメーション */
    animation-name: updown;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;

    @keyframes updown {
      0% {
        transform: translate(0%, -95%);
      }
      50% {
        transform: translate(0%, -80%);
      }
      100% {
        transform: translate(0%, -95%);
      }
    }

    &:hover {
      cursor: pointer;
    }

    /* スマートフォン用 */
    @media (max-width: 780px) {
      width: 48px;
      height: 48px;
    }
  `;

  const AboutId = document.getElementById("About");
  const scrollAbout =
    AboutId !== undefined
      ? () => {
          if (AboutId !== undefined) {
            AboutId?.scrollIntoView({ behavior: "smooth", block: "end" });
          }
        }
      : () => {};

  return (
    <div id="top" css={containerStyle}>
      <ArrowButton css={arrowButtonStyle} onClick={scrollAbout} />
      <p css={textStyle}>Hello New Creation & Service</p>
      <img src={TopImg} alt="TopImg" css={imageStyle}></img>
    </div>
  );
};
