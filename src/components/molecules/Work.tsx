/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";
import { useContext } from "react";
import { modalVisibleContext } from "../../context/modalVisible";
import { workDataContext } from "../../context/workData";
import { ProductTitle } from "../atoms/ProductTitle";
import { ProductImage } from "../atoms/ProductImage";

export type Props = {
  title: string;
  image1?: string;
  image2?: string;
  image3?: string;
  description?: string;
  skill?: string;
  url?: string;
};

export const Work: VFC<Props> = (props) => {
  const cursor = props.image1 !== undefined ? "pointer" : "auto";

  const title = props.title !== undefined ? props.title : ""
  const image1 = props.image1 !== undefined ? props.image1 : ""
  const image2 = props.image2 !== undefined ? props.image2 : ""
  const image3 = props.image3 !== undefined ? props.image3 : ""
  const description = props.description !== undefined ? props.description : ""
  const skill = props.skill !== undefined ? props.skill : ""
  const url = props.url !== undefined ? props.url : ""

  const isModal = useContext(modalVisibleContext);
  const isWorkData = useContext(workDataContext);
  
  const modalOpen =
    props.image1 !== undefined
      ? () => {
        isWorkData.setIsTitle(title);
        isWorkData.setIsImage1(image1);
        isWorkData.setIsImage2(image2);
        isWorkData.setIsImage3(image3);
        isWorkData.setIsDescription(description);
        isWorkData.setIsSkill(skill);
        isWorkData.setIsUrl(url);
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
      <ProductTitle>{title}</ProductTitle>
      <ProductImage image={props.image1} productName={props.title} />
    </div>
  );
};
