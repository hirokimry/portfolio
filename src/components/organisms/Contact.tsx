/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";
import { Section } from "../molecules/Section";
import { Form } from "../molecules/Form";
import { Text } from "../atoms/Text";

export const Contact: VFC = () => {
  const containerStyle = css`
    /* サイズ */
    width: 50%;
    min-height: 50%;
    max-height: 90%;

    /* 配置 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 5%;

    /* スマートフォン用 */
    @media (max-width: 780px) {
      width: 90%;
    }
  `;

  return (
    <Section name="Contact">
      <div css={containerStyle}>
        <Text>
          お問い合わせ・ご依頼などは、お気軽にこちらのフォームからご連絡ください。
        </Text>
        <Form />
      </div>
    </Section>
  );
};
