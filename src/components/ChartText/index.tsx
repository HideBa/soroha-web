/* eslint-disable no-restricted-imports */
import React from "react";
import styled from "@emotion/styled";
import { colors } from "../styles";

export type Props = {
  className?: string;
  text?: string;
  calculatedValue?: number;
};

const ChartText: React.FC<Props> = ({ className, text, calculatedValue }) => {
  return (
    <Wrapper>
      <StyledText>{text}</StyledText>
      <StyledCalculatedValue>{calculatedValue}円</StyledCalculatedValue>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const StyledText = styled.p`
  color: ${colors.textDarkBrown};
  text-align: center;
`;

const StyledCalculatedValue = styled.p`
  color: ${colors.textDarkBrown};
  text-align: center;
`;

export default ChartText;
