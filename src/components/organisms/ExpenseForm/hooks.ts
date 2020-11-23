import { isExpenseModalOpen } from "@soroha/recoil/atoms";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

export default () => {
  const [isModalOpen, toggleModal] = useRecoilState(isExpenseModalOpen);
  const handleToggleModal = (willOpen: boolean) => {
    toggleModal(willOpen);
  };

  // const sendExpense = useCallback(async () => {
  //   const url = await fetch();
  // }, []);
  const sendExpense = console.log("expense---");

  return {
    isModalOpen,
    handleToggleModal,
    sendExpense,
  };
};
