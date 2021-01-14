import { TEAM_EXPENSES, TEAM_MY_EXPENSES } from "@soroha/entryPoint";
import { userState } from "@soroha/recoil/atoms";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import { Expense as ExpenseType } from "@soroha/components/molecules/Timeline";

type Expense = ExpenseType;

export default () => {
  const [loading, setLoading] = useState(false);
  const currentTeam = useRecoilValue(userState).teamId;
  const userName = useRecoilValue(userState).userName;
  const [teamExpenses, setTeamExpenses] = useState<Array<Expense>>([]);
  const [myExpensesInTeam, setMyExpensesInTeam] = useState<Array<Expense>>([]);

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

  return {
    fetchTeamExpenses,
    fetchMyExpensesInTeam,
    teamExpenses,
    myExpensesInTeam,
  };
};
