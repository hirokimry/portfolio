/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";
import { Section } from "../molecules/Section";
import { Link } from "../molecules/Link";
import { Text } from "../atoms/Text";
import { ImgPhoto } from "../atoms/ImgPhoto";
import { ItemName } from "../atoms/ItemName";
import GitHubIcon from "../../img/GitHubIcon.png";
import TwitterIcon from "../../img/TwitterIcon.png";
import QiitaIcon from "../../img/QiitaIcon.png";

export const About: VFC = () => {
  const sectionItemsStyle = css`
    /* サイズ */
    width: 90%;
    min-height: 40%;
    max-height: 90%;

    /* 配置 */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 5%;
    padding-bottom: 5%;

    /* スマートフォン用 */
    @media (max-width: 780px) {
      min-height: 80%;
      flex-direction: column;
    }
  `;

  const profilesStyle = css`
    /* サイズ */
    width: 700px;
    height: 100%;

    /* 配置 */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;

    /* スマートフォン用 */
    @media (max-width: 780px) {
      width: 350px;
      flex-direction: column;
    }
  `;

  const prfItemsStyle = css`
    /* サイズ */
    width: 50%;

    /* 配置 */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    /* スマートフォン用 */
    @media (max-width: 780px) {
      width: 90%;
    }
  `;

  const prfItemStyle = css`
    /* サイズ */
    width: 80%;

    /* 配置 */
    display: flex;
  `;

  const linksStyle = css`
    /* サイズ */
    width: 70%;

    /* 配置 */
    display: flex;
    justify-content: space-around;
  `;

  return (
    <Section name="About">
      <div css={sectionItemsStyle}>
        <Text>
          音楽と創作が大好きなエンジニアです。
          {"\n"}
          車載組み込み開発に5年程携わり、信頼性・保守性の高いシステム開発スキルを習得しました。
          {"\n"}
          より技術革新が早く、多彩な技術に触れることのできる分野への興味が高まり、Webエンジニアへの転向を決意。
          {"\n"}
          フルスタックエンジニアとして活躍すべく、鋭意修行中。
        </Text>
        <div css={profilesStyle}>
          <ImgPhoto />
          <div css={prfItemsStyle}>
            <div css={prfItemStyle}>
              <ItemName>Name :</ItemName>
              <Text>モリヤ ヒロキ</Text>
            </div>
            <div css={prfItemStyle}>
              <ItemName>Address :</ItemName>
              <Text>Nagoya ( →Next Tokyo )</Text>
            </div>
            <div css={prfItemStyle}>
              <ItemName>Email :</ItemName>
              <Text>contact@hirokimoriya.com</Text>
            </div>
          </div>
        </div>
        <div css={linksStyle}>
          <Link
            icon={GitHubIcon}
            linkName="GitHub"
            url="https://github.com/hirokimry"
          >
            GitHub : hirokimry
          </Link>
          <Link
            icon={TwitterIcon}
            linkName="Twitter"
            url="https://twitter.com/hirokimry"
          >
            Twitter : hirokimry
          </Link>
          <Link
            icon={QiitaIcon}
            linkName="Qiita"
            url="https://qiita.com/hirokimry"
          >
            Qiita : hirokimry
          </Link>
        </div>
      </div>
    </Section>
  );
};
