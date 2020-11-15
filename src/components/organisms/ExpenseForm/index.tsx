import React from "react";
import { default as RawExpenseForm } from "@soroha/components/molecules/ExpenseForm";

export type Props = {
  className?: string;
  open?: boolean;
  toggleModal?: () => void;
};

const ExpenseForm: React.FC<Props> = ({ className, open, toggleModal }) => {
  return (
    <RawExpenseForm
      className={className}
      onSend={() => console.log("send")}
      isModalOpen={open}
      setIsModalOpen={toggleModal}
    />
  );
};

export default ExpenseForm;
