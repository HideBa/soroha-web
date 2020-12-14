import React, { useState } from "react";
import { default as RawExpenseForm } from "@soroha/components/molecules/ExpenseForm";
import useHooks from "./hooks";

export type Props = {
  className?: string;
};

const ExpenseForm: React.FC<Props> = ({ className }) => {
  const [err, setErr] = useState<string | undefined>(undefined);
  const { isModalOpen, handleToggleModal, sendExpense } = useHooks(setErr);
  return (
    <RawExpenseForm
      className={className}
      onSend={(price: number, comment: string) => sendExpense(price, comment)}
      isModalOpen={isModalOpen}
      setIsModalOpen={handleToggleModal}
      err={err}
    />
  );
};

export default ExpenseForm;
