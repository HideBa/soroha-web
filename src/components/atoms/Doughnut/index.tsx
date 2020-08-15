import React from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "@emotion/styled";

export type Props = {
  className?: string;
  data?: ChartData;
};

export type ChartData = {
  labels: string[]; //legends
  datasets: {
    data: number[]; //gonna be chart data
    backgroundColor: string[];
    hoverBackgroundColor: string[];
  }[];
};

const DoughnutChart: React.FC<Props> = ({ className }) => {
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
  return <StyledDoughnut data={data} />;
};

const StyledDoughnut = styled(Doughnut)``;

export default DoughnutChart;
