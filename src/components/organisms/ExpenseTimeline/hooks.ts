import { TEAM_EXPENSES, TEAM_MY_EXPENSES } from "@soroha/entryPoint";
import { userState } from "@soroha/recoil/atoms";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";

export default () => {
  const [loading, setLoading] = useState(false);
  const currentTeam = useRecoilValue(userState).teamId;
  const userName = useRecoilValue(userState).userName;

  const fetchTeamExpenses = useCallback(async () => {
    setLoading(true);
    if (!currentTeam) return;
    const token = localStorage.getItem("token");
    const res = await fetch(TEAM_EXPENSES(currentTeam), {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${token}`,
        Token: `${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const resJSON = await res.json();
        return resJSON;
      })
      .catch((err) => {
        console.error("failure to fetch expenses", err);
        return err;
      });
    setLoading(false);
    return res;
  }, [currentTeam]);

  const fetchMyExpensesInTeam = useCallback(async () => {
    setLoading(true);
    if (!currentTeam) return;
    const token = localStorage.getItem("token");
    const res = await fetch(TEAM_MY_EXPENSES(currentTeam), {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${token}`,
        Token: `${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const resJSON = await res.json();
        return resJSON;
      })
      .catch((err) => {
        console.error("failure to fetch expenses", err);
        return err;
      });
    setLoading(false);
    return res;
  }, [currentTeam]);

  const teamExpenses = useMemo(() => fetchTeamExpenses(), [fetchTeamExpenses]);
  const myExpensesInTeam = useMemo(() => fetchMyExpensesInTeam(), [
    fetchMyExpensesInTeam,
  ]);
  // useEffect(() => {
  //   fetchTeamExpenses();
  //   fetchMyExpensesInTeam();
  // }, [currentTeam]);

  return {
    fetchTeamExpenses,
    fetchMyExpensesInTeam,
    teamExpenses,
    myExpensesInTeam,
  };
};
