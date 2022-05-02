/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";
import { Icon } from "../atoms/Icon";
import { LinkText } from "../atoms/LinkText";

export type Props = {
  icon: string;
  linkName: string;
  url: string;
  children?: React.ReactNode;
};

export const Link: VFC<Props> = (props) => {
  const containerStyle = css`
    /* 配置 */
    display: flex;
    align-items: center;
    gap: 10px;

    /* aタグの標準スタイルを打ち消し */
    color: black;
    text-decoration: none;
  `;

  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={props.url}
      css={containerStyle}
    >
      <Icon icon={props.icon} linkName={props.linkName}></Icon>
      <LinkText>{props.children}</LinkText>
    </a>
  );
};
