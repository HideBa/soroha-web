import { CREATE_TEAM, TEAM_LIST } from "@soroha/entryPoint";
import { userState } from "@soroha/recoil/atoms";
import { useCallback, useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { useRecoilState } from "recoil";

export default () => {
  const [loading, setLoading] = useState(false);
  const [localUserState, setLocalUserState] = useRecoilState(userState);
  const [teams, setTeams] = useState([""]);
  const history = useHistory();

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
        setLocalUserState((localUserState) => {
          return { ...localUserState, teamId: resJSON.team };
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("failure to create team", err);
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
    let unmounted = false;
    !unmounted && fetchTeams();
    return () => {
      unmounted = true;
    };
  }, []);

  const switchTeam = (teamName: string) => {
    // TODO: should be refactored
    console.log("histroy", history.location.pathname);
    const TargetURL = history.location.pathname.replace(
      /[A-Za-z0-9_-]*$/,
      teamName,
    );
    history.push(TargetURL);
  };

  return {
    loading,
    createTeam,
    teams,
    fetchTeams,
    switchTeam,
  };
};
