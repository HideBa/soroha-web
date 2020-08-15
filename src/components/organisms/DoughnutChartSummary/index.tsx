import React from "react";
import styled from "@emotion/styled";
import DoughnutChart from "@soroha/components/atoms/Doughnut";
import ChartTexts, {
  PrimarySubChartData,
} from "@soroha/components/molecules/ChartTexts";
import CalculateSubmit from "@soroha/components/molecules/Calculate";
import { metrics } from "@soroha/components/styles";

export type Props = {
  className?: string;
  isPC?: boolean;
};

const DoughbutChartSummary: React.FC<Props> = ({ className, isPC }) => {
  const sampleData = {
    labels: ["Red", "Green", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  const sampleTextData: PrimarySubChartData = {
    primary: {
      text: "前回精算日以降の支出",
      calculatedValue: 20000,
    },
    sub: {
      text: "一人当たり",
      calculatedValue: 1000,
    },
  };
  return (
    <Wrapper>
      <UpperContainer>
        {/* TODO: must change data later */}
        <DoughnutChart
          data={sampleData}
          className="doughnut-chart"
          isPC={isPC}
        />
        {/* TODO: must cahnge data later */}
        <ChartTexts primarySubChartData={sampleTextData} />
      </UpperContainer>
      <CalculateSubmit />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  flex-grow: 2;
  align-items: center;
  width: calc(100% - 30px);
`;

const UpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 500px;
`;

export default DoughbutChartSummary;
