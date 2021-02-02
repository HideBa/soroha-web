// import { CREATE_TEAM, TEAM_LIST } from "@soroha/entryPoint";
// import { userState } from "@soroha/recoil/atoms";
// import { useCallback, useState } from "react";
// import { useRecoilState } from "recoil";

import { USERS } from "@soroha/entryPoint";
import { useCallback, useEffect, useState } from "react";

type SimpleUser = {
  username: string;
};

type UsersResponse = {
  users: SimpleUser[];
};

export default () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<string[]>([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const usersList: UsersResponse | null = await fetch(USERS, {
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
        if (res.ok) {
          const resJSON: UsersResponse = await res.json();
          return resJSON;
        }
        return null;
      })
      .catch((err) => {
        console.error(err);
        return null;
      });
    if (!usersList) {
      setLoading(false);
      return;
    }
    const usernameList = usersList.users.map((u) => u.username);
    setUsers(usernameList || []);
    setLoading(false);
    return users;
  }, [users]);
  // const [localUserState, setLocalUserState] = useRecoilState(userState);
  // const [teams, setTeams] = useState([""]);

  // const createTeam = useCallback(async (teamName: string) => {
  //   setLoading(true);
  //   const token = localStorage.getItem("token");
  //   const data = {
  //     team: {
  //       teamName: teamName,
  //     },
  //   };
  //   const res = await fetch(CREATE_TEAM, {
  //     method: "POST",
  //     mode: "cors",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       Token: `${token}`,
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then(async (res) => {
  //       const resJSON = await res.json();
  //       setLocalUserState((localUserState) => {
  //         return { ...localUserState, teamId: resJSON.team };
  //       });
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("failure to create team", err);
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const fetchTeams = async () => {
  //   const token = localStorage.getItem("token");
  //   const response = await fetch(TEAM_LIST, {
  //     method: "get",
  //     mode: "cors",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       Token: `${token}`,
  //     },
  //   })
  //     .then((res) => {
  //       const resJSON = res.json();
  //       return resJSON;
  //     })
  //     .catch((err) => console.error("failure to fetch teams", err));
  //   //reset team array
  //   teams.length = 0;
  //   setTeams(
  //     response.teams.map((t: any) => {
  //       return t.teamName;
  //     }),
  //   );
  // };

  useEffect(() => {
    let unmounted = false;
    !unmounted && fetchUsers();
    return () => {
      unmounted = true;
    };
  }, []);

  return {
    loading,
    users,
    // createTeam,
    // teams,
    // fetchTeams,
  };
};
