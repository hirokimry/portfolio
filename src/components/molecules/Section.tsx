/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { useContext } from "react";
import { css } from "@emotion/react";
import { headerHeightContext } from "../../context/headerHeight";
import { SectionName } from "../atoms/SectionName";

export type Props = {
  name: string;
  children?: React.ReactNode;
};

export const Section: VFC<Props> = (props) => {
  const headerHeight = useContext(headerHeightContext);

  const containerStyle = css`
    /* サイズ */
    height: calc(100vh - ${headerHeight.headerHeight}px);

    /* 奇数番目の子要素にはテーマカラーを適応 */
    background-color: white;
    :nth-of-type(odd) {
      background-color: #f0f0f0;
    }

    /* 配置 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* 表示崩れ防止 */
    @media (max-height: 780px) and (min-width: 780px) {
      height: 100%;
    }
  `;

  return (
    <div id={props.name} css={containerStyle}>
      <SectionName>{props.name}</SectionName>
      {props.children}
    </div>
  );
};
