/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";
import SiteIcon from "../../img/SiteIcon.png";

export const SiteLogo: VFC = () => {
  const containerStyle = css`
    /* サイズ */
    width: 200px;

    /* 文字 */
    font-size: 24px;

    /* 配置 */
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-left: 5%;
    gap: 5%;

    &:hover {
      cursor: pointer;
    }

    /* スマートフォン用 */
    @media (max-width: 780px) {
      width: 40%;
      font-size: 18px;
    }
  `;

  const iconStyle = css`
    width: 24px;
    height: 24px;

    /* スマートフォン用 */
    @media (max-width: 780px) {
      width: 18px;
      height: 18px;
    }
  `;

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div css={containerStyle} onClick={scrollTop}>
      <img src={SiteIcon} alt="Top" css={iconStyle} />
      <p>H.M. Studio</p>
    </div>
  );
};
