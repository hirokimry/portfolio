/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";
import { useContext } from "react";
import { modalVisibleContext } from "../../context/modalVisible";
import CloseIcon from "@mui/icons-material/Close";
import { WorkDetail } from "../molecules/WorkDetail";

export const Modal: VFC = () => {
  const isVisible = useContext(modalVisibleContext);

  const close = (e?: any) => {
    //CloseButton
    if (e === undefined) {
      isVisible.setIsModalVisible(false);
    }
    //枠外
    if (e.target === e.currentTarget) {
      isVisible.setIsModalVisible(false);
    }
  };

  const containerStyle = css`
    /* 色 */
    background-color: rgba(128, 128, 128, 0.3);

    /* サイズ */
    width: 100%;
    height: 100%;

    /* 配置 */
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 100;

    /* スマートフォン用 */
    @media (max-width: 780px) {
    }
  `;

  const windowStyle = css`
    /* 色 */
    background-color: rgba(233, 233, 233, 0.95);
    border: solid 1px rgba(0, 111, 111, 0.95);

    /* サイズ */
    width: 80%;
    height: 80%;
    border-radius: 32px;

    /* 配置 */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  `;

  const closeButtonStyle = css`
    /* 色 */
    color: gray;

    /* サイズ */
    width: 48px;
    height: 48px;

    /* 配置 */
    position: absolute;
    top: 40px;
    right: 40px;

    &:hover {
      cursor: pointer;
    }

    /* スマートフォン用 */
    @media (max-width: 780px) {
      width: 32px;
      height: 32px;
    }
  `;

  return (
    <>
      {isVisible.modalVisible ? (
        <div
          css={containerStyle}
          onClick={(e) => {
            close(e);
          }}
        >
          <div css={windowStyle}>
            <WorkDetail></WorkDetail>
            <CloseIcon css={closeButtonStyle} onClick={close} />
          </div>
        </div>
      ) : (
        <></> //非表示
      )}
    </>
  );
};
