import React from "react";
import ChartText, { ChartTextData } from "@soroha/components/atoms/ChartText";
import styled from "@emotion/styled";
import { fonts, metrics } from "@soroha/components/styles";

export type Props = {
  className?: string;
  primarySubChartData: PrimarySubChartData;
};

export type PrimarySubChartData = {
  primary: ChartTextData;
  sub: ChartTextData;
};

const ChartTexts: React.FC<Props> = ({ className, primarySubChartData }) => {
  return (
    <Wrapper>
      <ChartTextPrimary chartTextData={primarySubChartData.primary} />
      <ChartTextSub chartTextData={primarySubChartData.sub} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ChartTextPrimary = styled(ChartText)`
  font-size: ${fonts.size.medium}px;
  font-weight: bold;
`;

const ChartTextSub = styled(ChartText)``;

export default ChartTexts;
