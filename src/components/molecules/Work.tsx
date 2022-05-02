/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";
import { useContext } from "react";
import { modalVisibleContext } from "../../context/modalVisible";
import { ProductTitle } from "../atoms/ProductTitle";
import { ProductImage } from "../atoms/ProductImage";

export type Props = {
  title: string;
  image?: string;
};

export const Work: VFC<Props> = (props) => {
  const cursor = props.image !== undefined ? "pointer" : "auto";

  const isModal = useContext(modalVisibleContext);
  const modalOpen =
    props.image !== undefined
      ? () => {
          isModal.setIsModalVisible(true);
        }
      : () => [];

  const containerStyle = css`
    /* 色 */
    background-color: lightgray;

    /* サイズ */
    width: 350px;
    height: 350px;
    border-radius: 50%;
    overflow: hidden;

    /* 配置 */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:hover {
      cursor: ${cursor};
      p {
        display: flex;
        z-index: 2;
      }
      img {
        filter: brightness(50%);
      }
    }

    /* スマートフォン用 */
    @media (max-width: 780px) {
      width: 300px;
      height: 130px;
      border-radius: 24px;
    }

    /* 小画面用 */
    @media (max-width: 1400px) and (min-width: 780px) {
      width: 220px;
      height: 220px;
    }
  `;

  return (
    <div css={containerStyle} onClick={modalOpen}>
      <ProductTitle>{props.title}</ProductTitle>
      <ProductImage image={props.image} productName={props.title} />
    </div>
  );
};
