import React from "react";
import { hot } from "react-hot-loader/root";

import ExpenseForm from "@soroha/components/organisms/ExpenseForm";
import DoughbutChartSummary from "@soroha/components/organisms/DoughnutChartSummary";
import { useIsPC } from "@soroha/components/UtilFunctions/use-is-pc";
import { default as HomeBody } from "@soroha/components/atoms/Home";
import { Redirect } from "react-router";
import useAuth from "@soroha/components/Auth";
import InfoBar from "@soroha/components/atoms/SnackBar";

export type Props = {
  className?: string;
};

const Home: React.FC<Props> = () => {
  const isPC = useIsPC();
  const { isSignedIn } = useAuth();

  return isSignedIn ? (
    <HomeBody>
      <DoughbutChartSummary isPC={isPC} />
      <ExpenseForm />
      <InfoBar />
    </HomeBody>
  ) : (
    <Redirect to="/signin" />
  );
};

export default hot(Home);
