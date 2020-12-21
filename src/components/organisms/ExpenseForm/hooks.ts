import { SEND_EXPENSE } from "@soroha/entryPoint";
import { isExpenseModalOpen, userState } from "@soroha/recoil/atoms";
import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";

export default (setErr: (err: string | undefined) => void) => {
  const [isModalOpen, toggleModal] = useRecoilState(isExpenseModalOpen);
  const [userLocalState, setUserLocalState] = useRecoilState(userState);
  const [loading, setLoading] = useState(false);

  const handleToggleModal = (willOpen: boolean) => {
    toggleModal(willOpen);
  };

  const sendExpense = useCallback(
    async (price: number, comment: string) => {
      if (!userLocalState.teamId) return;
      setErr(undefined);
      setLoading(true);
      const token = localStorage.getItem("token");
      const data = {
        expense: {
          price: price,
          comment: comment,
        },
        team: {
          teamName: userLocalState.teamId,
        },
      };
      await fetch(SEND_EXPENSE, {
        method: "POST",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${token}`,
          Token: `${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(async (res) => {
          if (res.ok) {
            const resJSON = await res.json();

            console.log(resJSON);
          } else {
            setErr("failure---");
          }
        })
        .catch((err) => console.log("failure to send expense ", err));
      setLoading(false);
    },
    [userLocalState.teamId],
  );
  // const sendExpense = console.log("expense---");

  return {
    isModalOpen,
    handleToggleModal,
    sendExpense,
  };
};
