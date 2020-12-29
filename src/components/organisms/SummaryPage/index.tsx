import React from "react";
import MoleculeSummaryPage from "@soroha/components/molecules/PageFrame/Summary";
import ExpenseTimeline from "../ExpenseTimeline";
import NavBar from "../Nav/Header";
import MenuBar from "../Nav/MenuBar";

export type Props = {
  className?: string;
  teamName?: string;
};

const Summary: React.FC<Props> = ({ className, teamName }) => {
  return (
    <MoleculeSummaryPage
      className={className}
      header={<NavBar teamName={teamName} />}
      timeline={<ExpenseTimeline />}
      bottom={<MenuBar />}
    />
  );
};
export default Summary;
