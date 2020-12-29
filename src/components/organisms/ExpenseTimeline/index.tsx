import Timeline from "@soroha/components/molecules/Timeline";
import { TimelineItem } from "@soroha/components/molecules/Timeline/item";
import React from "react";
import useHooks from "./hooks";

export type Props = {
  className?: string;
};
const temp: TimelineItem[] = [
  {
    title: "hoge",
    content: "fuga",
    icon: "menu",
    time: "2020.1.21",
  },
  {
    title: "hoo",
    content: "fuuuu",
    icon: "menu",
    time: "2020.1.21",
  },
];

const ExpenseTimeline: React.FC<Props> = ({ className }) => {
  const {
    fetchTeamExpenses,
    myExpensesInTeam,
    teamExpenses,
    fetchMyExpensesInTeam,
  } = useHooks();
  return <Timeline items={temp} className={className} />;
};

export default ExpenseTimeline;
