/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";
import { headerHeightContext } from "../../context/headerHeight";
import { useHeaderHeight } from "../../context/headerHeight";
import { modalVisibleContext } from "../../context/modalVisible";
import { useModalVisible } from "../../context/modalVisible";
import { workDataContext } from "../../context/workData";
import { useWorkData } from "../../context/workData";
import { Header } from "../organisms/Header";
import { Main } from "../organisms/Main";
import { Footer } from "../organisms/Footer";
import { Modal } from "../organisms/Modal";

export const Home: VFC = () => {
  const headerHeight = useHeaderHeight();
  const modalVisible = useModalVisible();
  const workData = useWorkData();

  const containerStyle = css`
    /* サイズ */
    width: 100vw;
    min-height: 100vh;

    /* 配置 */
    display: flex;
    flex-direction: column;

    /* 文字 */
    font-family: Arial, Helvetica, sans-serif;
  `;

  return (
    <headerHeightContext.Provider value={headerHeight}>
      <modalVisibleContext.Provider value={modalVisible}>
        <workDataContext.Provider value={workData}>
          <div id="home" css={containerStyle}>
            <Header />
            <Main />
            <Footer />
            <Modal />
          </div>
        </workDataContext.Provider>
      </modalVisibleContext.Provider>
    </headerHeightContext.Provider>
  );
};
