import {
  DELETE_EXPENSE,
  TEAM_EXPENSES,
  TEAM_MY_EXPENSES,
  UPDATE_EXPENSE,
} from "@soroha/entryPoint";
import { notificationState, userState } from "@soroha/recoil/atoms";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Expense as ExpenseType } from "@soroha/components/molecules/Timeline";

type Expense = ExpenseType;

export default () => {
  const [loading, setLoading] = useState(false);
  const currentTeam = useRecoilValue(userState).teamId;
  const [teamExpenses, setTeamExpenses] = useState<Array<Expense>>([]);
  const [myExpensesInTeam, setMyExpensesInTeam] = useState<Array<Expense>>([]);
  const [err, setErr] = useState("");
  const setNotification = useSetRecoilState(notificationState);

  const fetchTeamExpenses = useCallback(async () => {
    setLoading(true);
    if (!currentTeam) return;
    const token = localStorage.getItem("token");
    const response: { expenses: Expense[]; count: number } = await fetch(
      TEAM_EXPENSES(currentTeam),
      {
        method: "GET",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${token}`,
          Token: `${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    )
      .then(async (res) => {
        const resJSON = await res.json();
        if (res.ok)
          return { expenses: resJSON.expenses, count: resJSON.expensesCount };
        throw new Error("failure to fetch");
      })
      .catch((err) => {
        console.error(err);
        return { expenses: [], count: 0 };
      });
    setLoading(false);
    return response.expenses;
  }, [currentTeam]);

  const fetchMyExpensesInTeam = useCallback(async () => {
    setLoading(true);
    if (!currentTeam) return;
    const token = localStorage.getItem("token");
    const response: { expenses: Expense[]; count: number } = await fetch(
      TEAM_MY_EXPENSES(currentTeam),
      {
        method: "GET",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${token}`,
          Token: `${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    )
      .then(async (res) => {
        const resJSON = await res.json();
        if (res.ok)
          return { expenses: resJSON.expenses, count: resJSON.expensesCount };
        throw new Error("failure to fetch");
      })
      .catch((err) => {
        console.error(err);
        return { expenses: [], count: 0 };
      });
    setLoading(false);
    return response.expenses;
  }, [currentTeam]);

  useEffect(() => {
    let unmounted = false;
    const execFetchExpenses = async () => {
      const te = await fetchTeamExpenses();
      const myet = await fetchMyExpensesInTeam();
      if (!unmounted) {
        te && setTeamExpenses(te);
        myet && setMyExpensesInTeam(myet);
      }
    };
    execFetchExpenses();
    return () => {
      unmounted = true;
    };
  }, [fetchMyExpensesInTeam, fetchTeamExpenses]);

  const updateExpenseBySlug = useCallback(
    async (price: number, comment: string, slug: string) => {
      setErr("");
      setLoading(true);
      const token = localStorage.getItem("token");
      const data = {
        expense: {
          price: price,
          comment: comment,
        },
      };
      await fetch(UPDATE_EXPENSE(slug), {
        method: "PATCH",
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
            setNotification({
              type: "notice",
              message: "更新が完了しました。",
            });
            setMyExpensesInTeam((await fetchMyExpensesInTeam()) ?? []);
            setTeamExpenses((await fetchTeamExpenses()) ?? []);
          } else {
            setErr("更新に失敗しました");
            setNotification({ type: "alert", message: "更新に失敗しました。" });
          }
        })
        .catch((err) => console.error("failure to update expense", err));
      setLoading(false);
      // TODO: ↓Avoid refetch below and pass the returned value
    },
    [fetchMyExpensesInTeam, fetchTeamExpenses, setNotification],
  );

  const deleteExpense = useCallback(async (slug: string) => {
    setErr("");
    setLoading(true);
    const token = localStorage.getItem("token");
    await fetch(DELETE_EXPENSE(slug)).then((res) => {
      if (res.ok) {
      }
    });
  }, []);

  return {
    loading,
    fetchTeamExpenses,
    fetchMyExpensesInTeam,
    teamExpenses,
    myExpensesInTeam,
    updateExpenseBySlug,
  };
};
