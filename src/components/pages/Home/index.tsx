import React from "react";
import { hot } from "react-hot-loader/root";

import ExpenseForm from "@soroha/components/organisms/ExpenseForm";
import DoughbutChartSummary from "@soroha/components/organisms/DoughnutChartSummary";
import { useIsPC } from "@soroha/components/UtilFunctions/use-is-pc";
import HomePageMolecule from "@soroha/components/molecules/PageFrame/Home";
import { Redirect, useHistory } from "react-router";
import useAuth from "@soroha/components/Auth";
import NavBar from "@soroha/components/organisms/Nav/Header";
import { useRecoilValue } from "recoil";
import { userState } from "@soroha/recoil/atoms";

export type Props = {
  className?: string;
};

const Home: React.FC<Props> = () => {
  const isPC = useIsPC();
  const { isSignedIn } = useAuth();
  const userName = useRecoilValue(userState).userName;
  const history = useHistory();
  isSignedIn && history.push(`/${userName}`);

  return isSignedIn ? (
    <HomePageMolecule
      header={<NavBar />}
      bodyLeft={<DoughbutChartSummary isPC={isPC} />}
      bodyRight={<ExpenseForm />}
    />
  ) : (
    <Redirect to="/signin" />
  );
};

export default Home;
