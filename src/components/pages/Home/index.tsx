import React from "react";
import { hot } from "react-hot-loader/root";

import ExpenseForm from "@soroha/components/organisms/ExpenseForm";
import DoughbutChartSummary from "@soroha/components/organisms/DoughnutChartSummary";
import { useIsPC } from "@soroha/components/UtilFunctions/use-is-pc";
import { default as HomeBody } from "@soroha/components/atoms/Home";

export type Props = {
  className?: string;
  isModalOpen?: boolean;
  setIsModalOpen: () => void;
};

const Home: React.FC<Props> = ({ setIsModalOpen, isModalOpen }) => {
  const isPC = useIsPC();
  return (
    <HomeBody>
      <DoughbutChartSummary isPC={isPC} />
      <ExpenseForm open={isModalOpen} toggleModal={setIsModalOpen} />
    </HomeBody>
  );
};

export default hot(Home);
