import Loading from "@soroha/components/atoms/Loading";
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
    updateExpenseBySlug,
    loading,
  } = useHooks();
  return loading ? (
    <Loading />
  ) : (
    <Timeline
      className={className}
      teamExpenses={teamExpenses}
      myExpensesInTeam={myExpensesInTeam}
      updateExpenseBySlug={updateExpenseBySlug}
    />
  );
};

export default ExpenseTimeline;
