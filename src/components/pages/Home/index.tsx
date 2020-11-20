import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";

import ExpenseForm from "@soroha/components/organisms/ExpenseForm";
import DoughbutChartSummary from "@soroha/components/organisms/DoughnutChartSummary";
import { useIsPC } from "@soroha/components/UtilFunctions/use-is-pc";
import { default as HomeBody } from "@soroha/components/atoms/Home";
import { Redirect } from "react-router";
import useAuth from "@soroha/components/Auth";
import Loading from "@soroha/components/atoms/Loading";
import { useRecoilState } from "recoil";
import { loading } from "@soroha/recoil/atoms";

export type Props = {
  className?: string;
  isModalOpen?: boolean;
  setIsModalOpen: () => void;
};

const Home: React.FC<Props> = ({ setIsModalOpen, isModalOpen }) => {
  const isPC = useIsPC();
  const { isSignedIn } = useAuth();

  return isSignedIn ? (
    <HomeBody>
      <DoughbutChartSummary isPC={isPC} />
      <ExpenseForm open={isModalOpen} toggleModal={setIsModalOpen} />
    </HomeBody>
  ) : (
    <Redirect to="/signin" />
  );
};

export default hot(Home);
