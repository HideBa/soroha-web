import { CREATE_TEAM } from "@soroha/entryPoint";
import { userState } from "@soroha/recoil/atoms";
import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";

export default () => {
  const [loading, setLoading] = useState(false);
  const [localUserState, setLocalUserState] = useRecoilState(userState);

  const createTeam = useCallback(async (teamName: string) => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const data = {
      team: {
        teamName: teamName,
      },
    };
    console.log(data);
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
      .then(async res => {
        const resJSON = await res.json();
        console.log(resJSON);
        setLocalUserState(localUserState => {
          return { ...localUserState, teamId: resJSON.team };
        });
        setLoading(false);
      })
      .catch(err => {
        console.log("failure to create team", err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    loading,
    createTeam,
  };
};
