import { css } from "@emotion/core";
import { colors } from "@soroha/components/styles";
import React from "react";
import HashLoader from "react-spinners/HashLoader";

const overrideSpinner = css`
  display: block;
  margin: 0 auto;
  color: red;
`;

const Loading = () => {
  return (
    <HashLoader css={overrideSpinner} color={colors.deepGreen} size={300} />
  );
};

export default Loading;
