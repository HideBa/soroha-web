/* eslint-disable no-restricted-imports */
import React from "react";
import styled from "@emotion/styled";
import { colors, metrics } from "../../styles";

export type Props = {
  className?: string;
  chartTextData: ChartTextData;
};

export type ChartTextData = {
  text: string;
  calculatedValue: number;
};

const ChartText: React.FC<Props> = ({ className, chartTextData }) => {
  return (
    <Wrapper className={className}>
      <StyledText>{chartTextData.text}</StyledText>
      <StyledCalculatedValue>
        {chartTextData.calculatedValue}円
      </StyledCalculatedValue>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: ${metrics.margin.chartText};
`;

const StyledText = styled.p`
  color: ${colors.textDarkBrown};
  text-align: center;
  margin: ${metrics.margin.chartText};
`;

const StyledCalculatedValue = styled.p`
  color: ${colors.textDarkBrown};
  text-align: center;
  margin: ${metrics.margin.chartText};
`;

export default ChartText;
