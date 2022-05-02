/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";

export type Props = {
  image?: string;
  productName?: string;
};

export const ProductImage: VFC<Props> = (props) => {
  const imageIs: string = props.image !== undefined ? "flex" : "none";

  const imageStyle = css`
    /* サイズ */
    width: auto;
    height: 100%;

    /* 配置 */
    display: ${imageIs};
    z-index: 1;

    /* スマートフォン用 */
    @media (max-width: 780px) {
      filter: brightness(50%);
      width: 100%;
      height: auto;
    }
  `;

  return <img src={props.image} alt={props.productName} css={imageStyle} />;
};
