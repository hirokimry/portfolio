/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";
import MyImg from "../../img/MyImg.jpg";

export type Props = {
  children?: React.ReactNode;
};

export const ImgPhoto: VFC<Props> = (props) => {
  const imageStyle = css`
    /* 色 */
    filter: grayscale(60%);

    /* サイズ */
    width: 150px;
    height: 150px;
    border-radius: 50%;
  `;

  return <img src={MyImg} alt="MyImg" css={imageStyle}></img>;
};
