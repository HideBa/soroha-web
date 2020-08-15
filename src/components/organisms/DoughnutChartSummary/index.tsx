import React from "react";
import styled from "@emotion/styled";
import DoughnutChart from "@soroha/components/atoms/Doughnut";
import ChartTexts, {
  PrimarySubChartData,
} from "@soroha/components/molecules/ChartTexts";

export type Props = {
  className?: string;
};

const DoughbutChartSummary: React.FC<Props> = ({ className }) => {
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
      {/* TODO: must change data later */}
      <DoughnutChart data={sampleData} />
      {/* TODO: must cahnge data later */}
      <ChartTexts primarySubChartData={sampleTextData} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;
export default DoughbutChartSummary;
