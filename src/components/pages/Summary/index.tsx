import React from "react";
import SummaryPage from "@soroha/components/organisms/SummaryPage";

export type Props = {
  className?: string;
};

const Summary: React.FC<Props> = ({ className }) => {
  return <SummaryPage />;
};

export default Summary;
