import { CREATE_TEAM, TEAM_LIST } from "@soroha/entryPoint";
import { userState } from "@soroha/recoil/atoms";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default () => {
  const [loading, setLoading] = useState(false);
  const [localUserState, setLocalUserState] = useRecoilState(userState);
  const [teams, setTeams] = useState([""]);

  const createTeam = useCallback(async (teamName: string) => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const data = {
      team: {
        teamName: teamName,
      },
    };
    const res = await fetch(CREATE_TEAM, {
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
        const resJSON = await res.json();
        console.log(resJSON);
        setLocalUserState((localUserState) => {
          return { ...localUserState, teamId: resJSON.team };
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log("failure to create team", err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchTeams = async () => {
    if (!localUserState) return;
    const token = localStorage.getItem("token");
    const response = await fetch(TEAM_LIST, {
      method: "get",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${token}`,
        Token: `${token}`,
      },
    })
      .then((res) => {
        const resJSON = res.json();
        return resJSON;
      })
      .catch((err) => console.log("failure to fetch teams", err));
    //reset team array
    teams.length = 0;
    setTeams(
      response.teams.map((t: any) => {
        return t.teamName;
      }),
    );
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  const switchTeam = (teamName: string) => {
    setLocalUserState((old) => {
      return {
        ...old,
        teamId: teamName,
      };
    });
  };

  return {
    loading,
    createTeam,
    teams,
    fetchTeams,
    switchTeam,
  };
};
