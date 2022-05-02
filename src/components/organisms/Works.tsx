/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";
import { Section } from "../molecules/Section";
import { Work } from "../molecules/Work";
import PortfolioImage from "../../img/Portfolio1.png";

export const Works: VFC = () => {
  const containerStyle = css`
    /* サイズ */
    width: 90%;

    /* 配置 */
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 5%;

    /* スマートフォン用 */
    @media (max-width: 780px) {
      height: 80%;
      flex-direction: column;
    }
  `;

  return (
    <Section name="Works">
      <div css={containerStyle}>
        <Work title="Portfolio" image={PortfolioImage} />
        <Work title="coming soon…" />
        <Work title="coming soon…" />
      </div>
    </Section>
  );
};
