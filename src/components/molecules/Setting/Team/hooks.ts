import { TEAM_LIST } from "@soroha/entryPoint";
import { ChangeEvent, useEffect, useState } from "react";

type Props = {
  createTeam?: (teamName: string) => void;
};

export default ({ createTeam }: Props) => {
  const [isClosableBoxVisible, toggleClosableBox] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [teams, setTeams] = useState([""]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchTeams = async () => {
      const response = await fetch(TEAM_LIST, {
        method: "get",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${token}`,
          Token: `${token}`,
        },
      })
        .then(res => {
          const resJSON = res.json();
          return resJSON;
        })
        .catch(err => console.log("failure to fetch teams", err));
      //reset team array
      teams.length = 0;
      setTeams(
        response.teams.map((t: any) => {
          return t.teamName;
        }),
      );
    };
    fetchTeams();
  }, []);

  const handleTeamNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.currentTarget.value);
  };

  useEffect(() => {
    console.log(teams);
  }, [teams]);

  const handleTeamCreate = () => createTeam && createTeam(teamName);

  return {
    isClosableBoxVisible,
    toggleClosableBox,
    teamName,
    handleTeamNameChange,
    handleTeamCreate,
    teams,
  };
};
