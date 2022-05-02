/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { useState, useRef, useEffect, useContext } from "react";
import { css } from "@emotion/react";
import { Menu } from "../molecules/Menu";
import { SiteLogo } from "../atoms/SiteLogo";
import { headerHeightContext } from "../../context/headerHeight";

export const Header: VFC = () => {
  /* headerの高さを取得 */
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const headerRef = useRef<HTMLOListElement>(null);
  const context = useContext(headerHeightContext);
  /* Refで取得した高さをStateにSet */
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, [headerRef]);
  /* StateをContextにSet */
  useEffect(() => {
    context.setIsHeaderHeight(headerHeight);
  }, [context, headerHeight]);

  const containerStyle = css`
    /* 色 */
    background-color: white;

    /* サイズ */
    width: 100%;

    /* 配置 */
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: sticky; //最上部固定
    top: 0;
    z-index: 100;

    /* スマートフォン用 */
    @media (max-width: 780px) {
      display: block;
    }
  `;

  return (
    <header id="header" ref={headerRef} css={containerStyle}>
      <SiteLogo />
      <Menu />
    </header>
  );
};
