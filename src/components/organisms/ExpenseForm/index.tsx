import React from "react";
import { default as RawExpenseForm } from "@soroha/components/molecules/ExpenseForm";
import useHooks from "./hooks";

export type Props = {
  className?: string;
};

const ExpenseForm: React.FC<Props> = ({ className }) => {
  const { isModalOpen, handleToggleModal, sendExpense } = useHooks();
  return (
    <RawExpenseForm
      className={className}
      onSend={(price: number, comment: string) => sendExpense(price, comment)}
      isModalOpen={isModalOpen}
      setIsModalOpen={handleToggleModal}
    />
  );
};

export default ExpenseForm;
