import React from "react";

import ExpenseForm from "@soroha/components/organisms/ExpenseForm";
import DoughbutChartSummary from "@soroha/components/organisms/DoughnutChartSummary";
import { useIsPC } from "@soroha/components/UtilFunctions/use-is-pc";
import HomePageMolecule from "@soroha/components/molecules/PageFrame/Home";
import { match } from "react-router";
import NavBar from "@soroha/components/organisms/Nav/Header";
import MenuBar from "@soroha/components/organisms/Nav/MenuBar";
import AuthenticationRequiredPage from "../AuthenticationRequiredPage";

type HomeMatch = {
  teamName: string;
};
export type Props = {
  className?: string;
  match?: match<HomeMatch>;
};

const Home: React.FC<Props> = ({ className, match }) => {
  const isPC = useIsPC();
  const teamName = match?.params.teamName;

  return (
    <AuthenticationRequiredPage>
      <HomePageMolecule
        header={<NavBar teamName={teamName} />}
        bodyLeft={<DoughbutChartSummary isPC={isPC} />}
        bodyRight={<ExpenseForm />}
        footer={<MenuBar />}
      />
    </AuthenticationRequiredPage>
  );
};

export default Home;
