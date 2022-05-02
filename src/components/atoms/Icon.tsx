/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";

export type Props = {
  icon: string;
  linkName: string;
};

export const Icon: VFC<Props> = (props) => {
  const containerStyle = css`
    width: 32px;
    height: 32px;
  `;

  return <img src={props.icon} alt={props.linkName} css={containerStyle} />;
};
