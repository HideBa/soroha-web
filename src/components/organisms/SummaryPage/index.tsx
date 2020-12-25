import React from "react";
import MoleculeSummaryPage from "@soroha/components/molecules/PageFrame/Summary";
import ExpenseTimeline from "../ExpenseTimeline";

export type Props = {
  className?: string;
};

const Summary: React.FC<Props> = ({ className }) => {
  return <MoleculeSummaryPage timeline={<ExpenseTimeline />} />;
};
export default Summary;
