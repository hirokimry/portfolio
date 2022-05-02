/** @jsxImportSource @emotion/react */
import { VFC } from "react";
import { css } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material//Button";

export type Props = {
  children?: React.ReactNode;
};

// カラーパレットの更新
declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }
  // createThemeでのneutralの使用を許可
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}
const theme = createTheme({
  palette: {
    neutral: {
      main: "gray",
      contrastText: "white",
    },
  },
});

// Buttonのカラーオプションを更新
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

export const SendButton: VFC<Props> = (props) => {
  const buttonStyle = css`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-top: 5%;

    /* スマートフォン用 */
    @media (max-width: 780px) {
      width: 100px;
      height: 100px;
    }
  `;

  return (
    <ThemeProvider theme={theme}>
      <Button
        type="submit"
        variant="contained"
        color="neutral"
        css={buttonStyle}
      >
        SEND
      </Button>
    </ThemeProvider>
  );
};
