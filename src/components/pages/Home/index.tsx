import React from "react";

import ExpenseForm from "@soroha/components/organisms/ExpenseForm";
import DoughbutChartSummary from "@soroha/components/organisms/DoughnutChartSummary";
import { useIsPC } from "@soroha/components/UtilFunctions/use-is-pc";
import HomePageMolecule from "@soroha/components/molecules/PageFrame/Home";
import { match, Redirect, useHistory } from "react-router";
import useAuth from "@soroha/components/Auth";
import NavBar from "@soroha/components/organisms/Nav/Header";
import { useRecoilValue } from "recoil";
import { userState } from "@soroha/recoil/atoms";
import MenuBar from "@soroha/components/organisms/Nav/MenuBar";

type HomeMatch = {
  teamName: string;
};
export type Props = {
  className?: string;
  match?: match<HomeMatch>;
};

const Home: React.FC<Props> = ({ className, match }) => {
  const isPC = useIsPC();
  const { isSignedIn } = useAuth();
  const teamName = match?.params.teamName;

  return isSignedIn ? (
    <HomePageMolecule
      // header={<NavBar />}
      header={<NavBar teamName={teamName} />}
      bodyLeft={<DoughbutChartSummary isPC={isPC} />}
      bodyRight={<ExpenseForm />}
      footer={<MenuBar />}
    />
  ) : (
    <Redirect to="/signin" />
  );
};

export default Home;
