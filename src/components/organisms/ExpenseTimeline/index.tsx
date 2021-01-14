import Timeline from "@soroha/components/molecules/Timeline";
import React from "react";
import useHooks from "./hooks";

export type Props = {
  className?: string;
};

const ExpenseTimeline: React.FC<Props> = ({ className }) => {
  const {
    fetchTeamExpenses,
    fetchMyExpensesInTeam,
    myExpensesInTeam,
    teamExpenses,
  } = useHooks();
  console.log("my----", myExpensesInTeam);
  console.log("team---", teamExpenses);
  return (
    <Timeline
      className={className}
      teamExpenses={teamExpenses}
      myExpensesInTeam={myExpensesInTeam}
    />
  );
};

export default ExpenseTimeline;
