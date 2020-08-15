import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";

import Form from "@soroha/components/organisms/Form";
import DoughbutChartSummary from "@soroha/components/organisms/DoughnutChartSummary";
import styled from "@emotion/styled";
import { metrics } from "@soroha/components/styles";
import { useIsPC } from "@soroha/components/UtilFunctions/use-is-pc";

export type Props = {
  className?: string;
  isModalOpen?: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
};

const Home: React.FC<Props> = ({ setIsModalOpen, isModalOpen }) => {
  const isPC = useIsPC();
  useEffect(() => {
    !isPC && setIsModalOpen(false);
  }, [isPC]);

  return (
    <Body>
      <DoughbutChartSummary isPC={isPC} />
      <Form
        isPC={isPC}
        isOpen={isModalOpen}
        setIsModalOpen={() => setIsModalOpen(!isModalOpen)}
      />
    </Body>
  );
};

const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100%;
  @media screen and (max-width: ${metrics.breakPoint.tabletOrSP}px) {
    flex-direction: column;
    align-items: center;
    padding: ${metrics.padding.body};
  }
`;

export default hot(Home);
