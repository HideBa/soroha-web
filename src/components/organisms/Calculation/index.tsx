import Loading from "@soroha/components/atoms/Loading";
import CalculateSubmit from "@soroha/components/molecules/Calculate";
import React from "react";
import useHooks from "./hooks";

export type Props = {
  className?: string;
};

const Calculation: React.FC<Props> = ({ className }) => {
  const { calculate: calculateExpenses, loading } = useHooks();
  return loading ? (
    <Loading />
  ) : (
    <CalculateSubmit onCalculate={calculateExpenses} />
  );
};

export default Calculation;
