/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";

export type Props = {
  children?: React.ReactNode;
};

export const Message: VFC<Props> = (props) => {
  // test css
  const containerStyle = css`
    //draft
    /* background-color: skyblue; */
    /* width: 200px; */
    height: 40px;

    //Confirm
    display: flex;
    align-items: center;
  `;

  return <p css={containerStyle}>{props.children}</p>;
};
