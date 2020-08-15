import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "@emotion/styled";
import { render } from "enzyme";

export type Props = {
  className?: string;
  data?: ChartData;
  isPC?: boolean;
};

export type ChartData = {
  labels: string[]; //legends
  datasets: {
    data: number[]; //gonna be chart data
    backgroundColor: string[];
    hoverBackgroundColor: string[];
  }[];
};

const DoughnutChart: React.FC<Props> = ({ className, isPC }) => {
  const data = {
    labels: ["Red", "Green", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  return (
    <StyledDoughnut
      data={data}
      width={isPC ? 400 : 300}
      height={isPC ? 400 : 300}
      redraw
    />
  );
};

const StyledDoughnut = styled(Doughnut)`
  width: 100%;
`;

export default DoughnutChart;
