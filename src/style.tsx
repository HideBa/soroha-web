import React from "react";
import { Global, css } from "@emotion/core";

const styles = css`
  html,
  body {
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: sans-serif;
  }
`;

const GlobalStyles: React.SFC = () => <Global styles={styles} />;

export default GlobalStyles;
