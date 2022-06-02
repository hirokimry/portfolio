/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";
import { Section } from "../molecules/Section";
import { Work } from "../molecules/Work";
import PortfolioImage1 from "../../img/Portfolio1.png";
import PortfolioImage2 from "../../img/Portfolio2.png";
import PortfolioImage3 from "../../img/Portfolio3.png";
import TechInfoPortalImage1 from "../../img/TechInfoPortal1.png";
import TechInfoPortalImage2 from "../../img/TechInfoPortal2.png";
import TechInfoPortalImage3 from "../../img/TechInfoPortal3.png";

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
        <Work title="Portfolio"
              image1={PortfolioImage1}
              image2={PortfolioImage2}
              image3={PortfolioImage3}
              description='当サイトです。モダンJavaScriptの学習も兼ねて、React + TypeScriptで制作しました。設計の段階ではメンテナンス性を重視するためにAtomic Designを採用しています。問い合わせフォームは、EmailJSを利用してメールの自動返信にも対応させています。'
              skill='HTML / CSS / JavaScript / React / TypeScript'
              url='https://hirokimoriya.com/'
              />
        <Work title="技術情報ニュースまとめ"
              image1={TechInfoPortalImage1}
              image2={TechInfoPortalImage2}
              image3={TechInfoPortalImage3}
              description='Ruby on Railsおよびデータベースの学習として、技術系ニュースのまとめサイトを制作しました。情報のキャッチアップ効率化も兼ねています。フロントエンドは時短のためにBootstrapを導入しました。Feedjira(Gem)を利用してRSSから記事を取得してます。※ユーザー登録・お気に入り機能追加予定'
              skill='Ruby on Rails 7 / Bootstrap 5 / HTML / CSS / PostgreSQL(Production) / SQLite(Development) / Heroku'
              url='https://technews-matome.herokuapp.com/'
              />
        <Work title="coming soon…" />
      </div>
    </Section>
  );
};
