import React from "react";
import SummaryPage from "@soroha/components/organisms/SummaryPage";
import { match } from "react-router";

type SummaryMatch = {
  teamName?: string;
};
export type Props = {
  className?: string;
  match?: match<SummaryMatch>;
};

const Summary: React.FC<Props> = ({ className, match }) => {
  const teamName = match?.params.teamName;
  return <SummaryPage className={className} teamName={teamName} />;
};

export default Summary;
