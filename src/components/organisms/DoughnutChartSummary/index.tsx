import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import DoughnutChart from "@soroha/components/atoms/Doughnut";
import ChartTexts, {
  PrimarySubChartData,
} from "@soroha/components/molecules/ChartTexts";
import CalculateSubmit from "@soroha/components/molecules/Calculate";
import Calculation from "../Calculation";

export type Props = {
  className?: string;
  isPC?: boolean;
};

export type PerPersonTotalExpenditure = {
  id: number;
  name: string;
  totalExpenditure: number;
};

type Data = {
  data?: PerPersonTotalExpenditure[];
};

const DoughbutChartSummary: React.FC<Props> = ({ isPC, className }) => {
  const [data, setData] = useState<PerPersonTotalExpenditure[]>();
  const url = process.env.SOROHA_WEB_API_ENDPOINT_TEST;

  const fetchDoughnutsData = async () => {
    if (!url) return;
    await fetch(url, {
      method: "GET",
      mode: "cors", //TODO: must be changed to same origin later
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
    // setData(res.data);
  };
  useEffect(() => {
    let unmounted = false;
    !unmounted && fetchDoughnutsData();
    return () => {
      unmounted = true;
    };
    // setData(res.data);
    // setData(await fetchPerPersonTotalExpenditure());
  });
  const labelsList = ["red", "green", "yellow", "blue", "brown"];
  // const data = await fetchPerPersonTotalExpenditure();
  // const data: Promise<
  //   PerPersonTotalExpenditure[]
  // > = fetchPerPersonTotalExpenditure().then(d => d);
  // .then(d => d)
  // .catch(error => console.error(error));
  // console.log("----", data);
  // data.map(d => {

  // })
  const doughnutsData = {
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
    <Wrapper className={className}>
      <UpperContainer>
        {/* TODO: must change data later */}
        <DoughnutChart data={doughnutsData} isPC={isPC} />
        {/* TODO: must cahnge data later */}
        <ChartTexts primarySubChartData={sampleTextData} />
      </UpperContainer>
      <Calculation />
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
