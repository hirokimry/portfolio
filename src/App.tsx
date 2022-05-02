import React from "react";
import { Global } from "@emotion/react";
import normalize from "emotion-normalize";
import { Home } from "./components/pages/Home";

function App() {
  return (
    <>
      <Global styles={normalize}></Global>
      <Home />
    </>
  );
}

export default App;
